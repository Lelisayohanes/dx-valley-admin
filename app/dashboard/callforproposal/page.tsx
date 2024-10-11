"use client";
import { useEffect, useState } from "react";
import { StartupsData, columns } from "@/components/callforproposal/callforproposal-columns";
import { DataTable } from "@/components/callforproposal/callforproposal-data-table";
import withAuth from "@/components/withAuth";

async function fetchStartupsData(): Promise<StartupsData[]> {
  try {
    const response = await fetch(`/api/callforproposal`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log(data);
    
    // Transform the data
    const startups: StartupsData[] = data.Startups.map((startup: any) => ({
      id: startup.id.toString(),
      startupName: startup.startupName,
      email: startup.contactInfo[0]?.email || '',
      phone: startup.contactInfo[0]?.phoneNumberOne || '',
      ideaDescription: startup.ideaDescription || '',
      stage: startup.stage,
      videopath: startup.video[0]?.path || '',
      documentpath: startup.documents.map((doc: any) => doc.path).join(", "),
    }));

    return startups;
  } catch (error) {
    console.error('Error fetching startup data:', error);
    return []; // Return an empty array in case of an error
  }
}

function StartupPage() {
  const [data, setData] = useState<StartupsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const loadData = async () => {
      try {
        const startups = await fetchStartupsData();
        setData(startups);
      } catch (error) {
        setError((error as Error).message || 'An error occurred while fetching data.'); // Handle error
      } finally {
        setLoading(false); // Ensure loading is false
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div className="container mx-auto pt-0">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default withAuth(StartupPage);
