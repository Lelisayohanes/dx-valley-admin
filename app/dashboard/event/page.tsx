
import { Event, columns } from "@/components/events/event-table-columns";
import { DataTable } from "@/components/events/events-data-table";
import { Button } from "@/components/ui/button";

async function getData(): Promise<Event[]> {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/api/event`);

    if (!response.ok) {
      throw new Error(`Failed to fetch event data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Fetched data:', data);

    // Ensure the data is an array
    if (!Array.isArray(data)) {
      throw new Error('Fetched data is not an array');
    }

    // Map the API data to the Event type
    const eventData: Event[] = data.map((eventItem: any) => ({
      id: eventItem.id.toString(),
      name: eventItem.name,
      description: eventItem.description,
      category: eventItem.category as "tech-expo" | "contest", // Adjust based on your categories
      targetDate: new Date(eventItem.targetDate),
    }));

    return eventData;
  } catch (error) {
    console.error('Error fetching event data:', error);
    return [];
  }
}

export default async function EventPage() {
  const data = await getData();

  return (
    <div className="container mx-auto pt-0">
      <div className="flex justify-end m-6">
      <a href="/dashboard/event/create">
      <Button>
        Add New Event
      </Button>
    </a>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}


