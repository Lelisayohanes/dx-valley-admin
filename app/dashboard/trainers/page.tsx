"use client";
import { useEffect, useState } from "react";
import { TrainersData, columns } from "@/components/trainers/trainers-columns";
import { DataTable } from "@/components/trainers/trainers-data-table";
import withAuth from "@/components/withAuth";

// Fetch trainers' data from the API route
async function fetchTrainersData(): Promise<TrainersData[]> {
  try {
    const response = await fetch(`/api/trainer/gettrainer`); // Fetch from the API route you created

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    // Transform the data to fit your table structure
    const trainers: TrainersData[] = data.map((trainer: any) => ({
      id: trainer.id.toString(),
      fullName: `${trainer.firstName} ${trainer.lastName}`, // Modify based on actual data structure
      email: trainer.email || '',
      phone: trainer.phone || '',
      city: trainer.city || '',
      expertise: trainer.expertise || '',
      profession: trainer.profession || '',
      schedule: trainer.schedule || ''
    }));

    return trainers;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array in case of an error
  }
}

function TrainersPage() {
  const [data, setData] = useState<TrainersData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const loadData = async () => {
      try {
        const trainers = await fetchTrainersData();
        setData(trainers);
      } catch (error) {
        setError((error as Error).message || 'An error occurred while fetching data.');
      } finally {
        setLoading(false); // Ensure loading is false after fetching
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
      {/* <pre>
        {JSON.stringify(data, null, 2)} 
      </pre> */}
    </div>
  );
}

export default withAuth(TrainersPage);
