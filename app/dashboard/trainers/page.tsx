"use client";
import { useEffect, useState } from "react";
import { TrainersData, columns } from "@/components/trainers/trainers-columns";
import { DataTable } from "@/components/trainers/trainers-data-table";
import withAuth from "@/components/withAuth";

async function fetchTrainersData(): Promise<TrainersData[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/trainer`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    // Transform the data
    const trainers: TrainersData[] = data.Trainers.map((trainer: any) => ({
      id: trainer.id.toString(),
      fullName: `${trainer.personalInfo.firstName} ${trainer.personalInfo.lastName}`,
      email: trainer.personalInfo.contactInfo[0]?.email || '',
      phone: trainer.personalInfo.contactInfo[0]?.phoneNumberOne || '',
      city: trainer.personalInfo.addressInfo[0]?.city || '',
      expertise: trainer.expertise,
      profession: trainer.profession,
      schedule: trainer.schedule,
    }));

    return trainers;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array in case of an error
  }
}

function EventPage() {
  const [data, setData] = useState<TrainersData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const loadData = async () => {
      try {
        const trainers = await fetchTrainersData();
        setData(trainers);
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

export default withAuth(EventPage);
