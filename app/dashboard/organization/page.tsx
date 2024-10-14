import { OrganizationData, columns } from "@/components/organization/organization-columns";
import { DataTable } from "@/components/organization/organization-data-table"; // Corrected import path

async function getData(): Promise<OrganizationData[]> {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/api/organization`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    // Transform the data
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
    return []; // Return an empty array in case of an error
  }
}

export default async function EventPage() {
  const data = await getData();

  return (
    <div className="container mx-auto pt-0">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
