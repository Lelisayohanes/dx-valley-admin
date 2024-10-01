"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; 

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) {
      router.push("/"); 
    }
  }, [router]);

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      {/* Rest of your dashboard component */}
    </div>
  );
};

export default Dashboard;
