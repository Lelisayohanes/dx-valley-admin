/** @format */

"use client";

import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/internship/internship-data-table";
import DetailDisplay from "../detail-display";

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
