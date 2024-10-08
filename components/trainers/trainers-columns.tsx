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

export type TrainersData = {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    city: string;
    expertise: string;  
    profession: string; 
    schedule: string;
  };
  

export const columns: ColumnDef<TrainersData>[] = [
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
    accessorKey: "expertise",
    header: "Expertise",
  },
  {
    accessorKey: "university",
    header: "University",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  
];
