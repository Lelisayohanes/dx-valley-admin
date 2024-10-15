"use client"; // Indicate this component should be rendered on the client

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { User, columns } from "@/components/user/user-columns";
import { DataTable } from "@/components/events/events-data-table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import withAuth from "@/components/withAuth";

const UserPage = () => {
  const router = useRouter();
  const [data, setData] = useState<User[]>([]); // State for user data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const token = Cookies.get("accessToken"); // Check for the access token

    if (!token) {
      router.push("/"); // Redirect to login if not authenticated
      return;
    }
    const getData = async () => {
      try {
        const response = await fetch("/api/user/getuser", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch user data: ${response.statusText}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Fetched data is not an array");
        }

        // Map the API data to the User type
        const userData: User[] = data.map((userItem: any) => ({
          id: userItem.id.toString(),
          username: userItem.username,
          email: userItem.email,
        }));

        setData(userData); 
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError((error as Error).message || "An error occurred"); 
      } finally {
        setLoading(false); 
      }
    };

    getData(); 
  }, [router]); 

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>Error: {error}</p>; 
  }

  return (
    <div className="container mx-auto pt-0">
      <div className="flex justify-end m-6">
        <a href="/dashboard/user/create">
          <Button>Add New User</Button>
        </a>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UserPage;
