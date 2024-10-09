"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CreateUser from '@/components/events/user-create';
import Cookies from "js-cookie";
import withAuth from "@/components/withAuth"; 

const Page = () => {
  return (
    <div>
      <CreateUser />
    </div>
  );
}

export default withAuth(Page);
