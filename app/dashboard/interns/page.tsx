import { InternsData, columns } from "@/components/internship/internship-columns";
import { DataTable } from "@/components/internship/internship-data-table";

export const getData = async (): Promise<InternsData[]> =>{
  try {
    const response = await fetch(`${process.env.SERVER_URL}/api/internship`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log(data); 
    
    const interns: InternsData[] = Array.isArray(data.interns)
  ? data.interns.map((intern: any) => {
      const start = new Date(intern.internshipStart);
      const end = new Date(intern.internshipEnd);

      const timeDifference = end.getTime() - start.getTime();
      const differenceInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

      return {
            id: intern.id.toString(),
            fullName: `${intern.personalInfo[0]?.firstName || ''} ${intern.personalInfo[0]?.lastName || ''}`,
            email: intern.contactInfo[0]?.email || '',
            phone: intern.contactInfo[0]?.phoneNumberOne || '',
            university: intern.university,
            department: intern.department,
            period: `${differenceInDays} days`,
            aboutYourself: intern.aboutYourself,
            year: intern.year,
            interestAreas: intern.interestAreas,
            otherInterests: intern.otherInterests,
            portfolioLink: intern.portfolioLink,
            linkedinProfile: intern.linkedinProfile,
            gender:intern.personalInfo[0].gender,
            documentpath:intern.documents[0].path
          };
        })
      : [];


        return interns;
    
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
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

