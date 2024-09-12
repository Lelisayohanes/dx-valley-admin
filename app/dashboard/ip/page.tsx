import { IndependentPartnerData, columns } from "@/components/ip/ip-columns";
import { DataTable } from "@/components/ip/ip-data-table";

async function getData(): Promise<IndependentPartnerData[]> {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/api/independentpartner`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    // Transform the data
    const independentPartners: IndependentPartnerData[] = data.independentPartners.map((partner: any) => ({
      id: partner.id.toString(),
      fullName: `${partner.personalInfo.firstName} ${partner.personalInfo.lastName}`,
      email: partner.personalInfo.contactInfo[0]?.email || '',
      phone: partner.personalInfo.contactInfo[0]?.phoneNumberOne || '',
      city: partner.personalInfo.addressInfo[0]?.city || '',
      focusArea: partner.focusArea,
      interestArea: partner.interestArea,
    }));

    return independentPartners;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of error
  }
}

export default async function EventPage() {
  const data = await getData();

  return (
    <div className="container mx-auto pt-0 flex items-end justify-start">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
