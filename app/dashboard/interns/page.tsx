/** @format */
"use client";
import {
  InternsData,
  columns,
} from "@/components/internship/internship-columns";
import { DataTable } from "@/components/internship/internship-data-table";
import { FC, useState, useEffect } from "react";

// Data fetching function
const fetchData = async (): Promise<InternsData[]> => {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/api/internship`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const interns: InternsData[] = Array.isArray(data.interns)
      ? data.interns.map((intern: any) => {
          const start = new Date(intern.internshipStart);
          const end = new Date(intern.internshipEnd);
          const differenceInDays = Math.ceil(
            (end.getTime() - start.getTime()) / (1000 * 3600 * 24)
          );

          return {
            id: intern.id.toString(),
            fullName: `${intern.personalInfo[0]?.firstName || ""} ${
              intern.personalInfo[0]?.lastName || ""
            }`,
            email: intern.contactInfo[0]?.email || "",
            phone: intern.contactInfo[0]?.phoneNumberOne || "",
            university: intern.university,
            department: intern.department,
            period: `${differenceInDays} days`,
            aboutYourself: intern.aboutYourself,
            year: intern.year,
            interestAreas: intern.interestAreas,
            otherInterests: intern.otherInterests,
            portfolioLink: intern.portfolioLink,
            linkedinProfile: intern.linkedinProfile,
            gender: intern.personalInfo[0]?.gender,
            documentpath: intern.documents[0]?.path,
          };
        })
      : [];
    return interns;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Page component
const EventPage = () => {
  const [data, setData] = useState<InternsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      const internsData = await fetchData();
      setData(internsData);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <div className='container mx-auto pt-0'>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default EventPage;
