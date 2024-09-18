import { StartupsData, columns } from "@/components/callforproposal/callforproposal-columns";
import { DataTable } from "@/components/callforproposal/callforproposal-data-table";

async function getData(): Promise<StartupsData[]> {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/api/callforproposal`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    // Transform the data
    const startups: StartupsData[] = data.Startups.map((startup: any) => ({
      id: startup.id.toString(),
      startupName: startup.startupName,
      email: startup.contactInfo[0]?.email || '',
      phone: startup.contactInfo[0]?.phoneNumberOne || '',
      ideaDescription: startup.ideaDescription || '',
      stage: startup.stage,
      videoId: startup.videoId?.toString() || '',
      documentpath: startup.documents.map((doc: any) => doc.id).join(", "),
    }));

    return startups;
  } catch (error) {
    console.error('Error fetching startup data:', error);
    return []; // Return an empty array in case of an error
  }
}

export default async function StartupPage() {
  const data = await getData();

  return (
    <div className="container mx-auto pt-0">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
