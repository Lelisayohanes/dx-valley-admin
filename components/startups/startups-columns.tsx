"use client"; 

import { ColumnDef } from "@tanstack/react-table";

export type StartupsData = {
  id: string;
  fullName: string;
  email: string;
  phone: string;

};


export const columns: ColumnDef<StartupsData>[] = [
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
  
];
