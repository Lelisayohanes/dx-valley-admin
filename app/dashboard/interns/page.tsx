"use client";
import {
  InternsData,
  columns,
} from "@/components/internship/internship-columns";
import { DataTable } from "@/components/internship/internship-data-table";
import withAuth from "@/components/withAuth";
import { FC, useState, useEffect } from "react";

// Data fetching function
const fetchData = async (): Promise<InternsData[]> => {
  try {
    const response = await fetch(`/api/internship`);
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
            fullName: `${intern.personalInfo[0]?.firstName || ""} ${intern.personalInfo[0]?.lastName || ""}`,
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
    throw new Error("Failed to fetch data");
  }
};

// Page component
const InternsPage: FC = () => {
  const [data, setData] = useState<InternsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const internsData = await fetchData();
        setData(internsData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message); // Safely access error message
        } else {
          setError("An unknown error occurred"); // Fallback for unknown error type
        }
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center"><span>Loading...</span></div>; // Replace with a spinner if desired
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Display error message
  }

  return (
    <div className='container mx-auto pt-0'>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default withAuth(InternsPage);
