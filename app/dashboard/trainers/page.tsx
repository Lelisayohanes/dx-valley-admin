import { TrainersData, columns } from "@/components/trainers/trainers-columns";
import { DataTable } from "@/components/trainers/trainers-data-table";
import { OrganizationInfo } from "@prisma/client";

async function getData(): Promise<TrainersData[]> {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/api/trainer`);

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

export default async function EventPage() {
  const data = await getData();

  return (
    <div className="container mx-auto pt-0">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
