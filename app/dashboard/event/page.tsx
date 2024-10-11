"use client";
import { useEffect, useState, useMemo } from "react";
import { Event, columns } from "@/components/events/event-table-columns";
import { DataTable } from "@/components/events/events-data-table";
import { Button } from "@/components/ui/button";
import withAuth from "@/components/withAuth";

const EventPage = () => {
  const [data, setData] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/event/getevent`); // Update API endpoint as necessary
        if (!response.ok) {
          throw new Error(`Failed to fetch event data: ${response.statusText}`);
        }

        const result = await response.json();
        if (!Array.isArray(result)) {
          throw new Error("Fetched data is not an array");
        }

        setData(result);
      } catch (error: unknown) {
        console.error("Error fetching event data:", error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []); // This will only run once on component mount

  // Optional memoization of data transformation
  const transformedData = useMemo(() => {
    return data.map((eventItem: any) => ({
      id: eventItem.id.toString(),
      name: eventItem.name,
      description: eventItem.description,
      category: eventItem.category as "tech-expo" | "contest", // Adapt to your categories
      targetDate: new Date(eventItem.targetDate),
    }));
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto pt-0">
      <div className="flex justify-end m-6">
        <a href="/dashboard/event/create">
          <Button>Add New Event</Button>
        </a>
      </div>
      <DataTable columns={columns} data={transformedData} />
    </div>
  );
};

export default withAuth(EventPage);
