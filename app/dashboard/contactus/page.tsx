"use client";
import { useEffect, useState } from "react";
import { ContactUs, columns } from "@/components/constactus/contuctus-columns";
import { DataTable } from "@/components/constactus/contactus-data-table";
import withAuth from "@/components/withAuth";

async function fetchContactData(): Promise<ContactUs[]> {
  try {
    const response = await fetch(`/api/contactus`);

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

function ContactUsPage() {
  const [data, setData] = useState<ContactUs[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const loadData = async () => {
      try {
        const contactData = await fetchContactData();
        setData(contactData);
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

export default withAuth(ContactUsPage);
