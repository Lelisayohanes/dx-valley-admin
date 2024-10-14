"use client";
import { useEffect, useState } from "react";
import { OrganizationData, columns } from "@/components/organization/organization-columns";
import { DataTable } from "@/components/organization/organization-data-table"; 
import withAuth from "@/components/withAuth";

async function fetchOrganizationData(): Promise<OrganizationData[]> {
  try {
    const response = await fetch(`/api/organization`);
    console.log(process.env.NEXT_PUBLIC_SERVER_URL); // Debugging output
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log(data); // Debugging output

    const organizations: OrganizationData[] = data.Organizations.map((org: any) => ({
      id: org.id.toString(),
      organizationName: org.organizationName,
      email: org.contactInfo[0]?.email || '',
      phone: org.contactInfo[0]?.phoneNumberOne || '',
      city: org.addressInfo[0]?.city || '',
      focusArea: org.focusArea,
      organizationType: org.organizationType,
    }));

    return organizations;
  } catch (error) {
    console.error('Error fetching organization data:', error);
    throw error; // Throw error to handle it in the calling function
  }
}

function OrganizationPage() {
  const [data, setData] = useState<OrganizationData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // State to manage errors

  useEffect(() => {
    async function loadData() {
      try {
        const organizations = await fetchOrganizationData();
        setData(organizations);
      } catch (error) {
        setError((error as Error).message || 'An error occurred while fetching data.'); // Handle error properly
      } finally {
        setLoading(false); // Ensure loading is false regardless of success or failure
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message to users
  }

  return (
    <div className="container mx-auto pt-0">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default withAuth(OrganizationPage);
