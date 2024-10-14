"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import withAuth from "@/components/withAuth";

const Dashboard = () => {
  const router = useRouter();


  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      {/* Rest of your dashboard component */}
    </div>
  );
};

export default withAuth(Dashboard);
