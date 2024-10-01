"use client"; 

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import DetailDisplay from "../detail-display";
import { getData } from "@/app/dashboard/interns/page";

export type InternsData = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  university: string;
  department: string;
  period: string;
  aboutYourself: string;
  year: number;
  interestAreas: string[];
  otherInterests: string;
  portfolioLink?: string;
  linkedinProfile?: string;
  gender: string;
  documentpath?: string;
};

export const columns: ColumnDef<InternsData>[] = [
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "university",
    header: "University",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "period",
    header: "Stay for",
  },
  {
    id: "details",
    header: "Details",
    cell: ({ row }) => {
      const interns = row.original; 
      return <DetailDisplay internDetail={interns} />;
    },
  },
  
];
