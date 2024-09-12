import { ContactUs, columns } from "@/components/constactus/contuctus-columns"
import { DataTable } from "@/components/constactus/contactus-data-table"


async function getData(): Promise<ContactUs[]> {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/api/contactus`);

    if (!response.ok) {
      throw new Error(`Failed to fetch contact data: ${response.statusText}`);
    }

    const data = await response.json();
    
    console.log('Fetched data:', data); // Log the data to see its structure

    // Extract the contact array from the response object
    const contactArray = data.contact;

    // Ensure contactArray is an array
    if (!Array.isArray(contactArray)) {
      throw new Error('Fetched data is not an array');
    }

    // Map the contact array to the ContactUs type
    const contactData: ContactUs[] = contactArray.map((contactItem: any) => ({
      id: contactItem.id.toString(),
      fullName: contactItem.name,  // Adjusted field name to match the data
      email: contactItem.email,
      message: contactItem.message,
    }));

    return contactData;
  } catch (error) {
    console.error('Error fetching contact data:', error);
    return []; // Return an empty array in case of error
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

