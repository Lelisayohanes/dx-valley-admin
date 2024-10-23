"use client";
import AdminEvent from "@/components/events/admin-event";
import withAuth from "@/components/withAuth";
import React from "react";

// Define props for the page component if needed
type PageProps = {
  // Add any specific props here, if the page component accepts any
};

const Page: React.FC<PageProps> = () => {
  return (
    <div>
      <AdminEvent />
    </div>
  );
};

export default withAuth(Page);
