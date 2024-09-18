import { StartupsData, columns } from "@/components/startups/startups-columns";
import { DataTable } from "@/components/startups/startups-data-table";

async function getData(): Promise<StartupsData[]> {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/api/startups`);

    if (!response.ok) {
      throw new Error('Failed to fetch media data');
    }

    const data = await response.json();

    // Transform the data
    const startupsData: StartupsData[] = data.startup.map((startupsItem: any) => ({
      id: startupsItem.id.toString(),
      mediaName: startupsItem.mediaName,
      email: startupsItem.contactInfo[0]?.email || '',
      phone: startupsItem.contactInfo[0]?.phoneNumberOne || '',

    }));

    return startupsData;
    
  } catch (error) {
    console.error('Error fetching media data:', error);
    return []; // Return an empty array in case of an error
  }
}

export default async function StartupsPage() {
  const data = await getData();

  return (
    <div className="container mx-auto pt-0 flex items-start">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
