import { SubscriberData, columns } from "@/components/subscriber/subscriber-columns"
import { DataTable } from "@/components/subscriber/subscriber-data-table"

async function getData(): Promise<SubscriberData[]> {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/api/subscriber`);

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
    return []; 
  }
}

export default async function EventPage() {
  const data = await getData()

  return (
    <div className="container mx-auto pt-0 ">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

