"use client"; // This is for Next.js 13 and above
import { useEffect, useState } from "react";
import { IndependentPartnerData, columns } from "@/components/ip/ip-columns";
import { DataTable } from "@/components/ip/ip-data-table";
import withAuth from "@/components/withAuth";

// Fetch data from your internal API route
async function fetchIndependentPartnerData(): Promise<IndependentPartnerData[]> {
  try {
    const response = await fetch('/api/independentpartner'); // Fetch from the Next.js API route

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    // Transform the data
    return data.independentPartners.map((partner: any) => ({
      id: partner.id.toString(),
      fullName: `${partner.personalInfo.firstName} ${partner.personalInfo.lastName}`,
      email: partner.personalInfo.contactInfo[0]?.email || '',
      phone: partner.personalInfo.contactInfo[0]?.phoneNumberOne || '',
      city: partner.personalInfo.addressInfo[0]?.city || '',
      focusArea: partner.focusArea,
      interestArea: partner.interestArea,
    }));
  } catch (error) {
    console.error('Error fetching independent partner data:', error);
    throw error; // Rethrow error to handle it in the calling function
  }
}

function IndependentPartnerPage() {
  const [data, setData] = useState<IndependentPartnerData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // State to manage errors

  useEffect(() => {
    const loadData = async () => {
      setLoading(true); // Set loading to true immediately on fetch initiation
      try {
        const partners = await fetchIndependentPartnerData();
        setData(partners);
      } catch (error) {
        setError((error as Error).message || 'An error occurred while fetching data.'); // Handle error properly
      } finally {
        setLoading(false); // Ensure loading is false regardless of success or failure
      }
    };

    loadData();
  }, []);

  // Loading state
  if (loading) {
    return <div className="loading-spinner">Loading...</div>; // Optional: add a spinner or loader component
  }

  // Error state
  if (error) {
    return <div className="error-message">Error: {error}</div>; // Display error message to users
  }

  // Render data table
  return (
    <div className="container mx-auto pt-0 flex items-end justify-start">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

// Exporting the page wrapped with the withAuth HOC for authentication
export default withAuth(IndependentPartnerPage);
