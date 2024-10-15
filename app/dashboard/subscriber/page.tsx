"use client";
import { useEffect, useState } from "react";
import { SubscriberData, columns } from "@/components/subscriber/subscriber-columns";
import { DataTable } from "@/components/subscriber/subscriber-data-table";
import withAuth from "@/components/withAuth";

async function fetchSubscriberData(): Promise<SubscriberData[]> {
  try {
    const response = await fetch(`/api/subscriber`);

    if (!response.ok) {
      throw new Error(`Failed to fetch subscriber data: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Fetched data:', data);
    
    const subscriberArray = data.subscribers;

    if (!Array.isArray(subscriberArray)) {
      throw new Error('Fetched data is not an array');
    }

    const subscriberData: SubscriberData[] = subscriberArray.map((subscriberItem: any) => ({
      id: subscriberItem.id.toString(),
      subscriberEmail: subscriberItem.email,
    }));

    return subscriberData;
  } catch (error) {
    console.error('Error fetching subscriber data:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}

function SubscriberPage() {
  const [data, setData] = useState<SubscriberData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const loadData = async () => {
      try {
        const subscribers = await fetchSubscriberData();
        setData(subscribers);
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

export default withAuth(SubscriberPage);
