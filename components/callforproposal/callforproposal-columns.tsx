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

export type StartupsData = {
  id: string;
  startupName: string;
  email: string;
  phone: string;
  ideaDescription: string;
  stage: string;
  videoId: string;
  documentpath: string;
};

export const columns: ColumnDef<StartupsData>[] = [
  {
    accessorKey: "startupName",
    header: "Startup Name",
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
    accessorKey: "ideaDescription",
    header: "Idea Description",
  },
  {
    accessorKey: "stage",
    header: "Stage",
  },
  {
    accessorKey: "videoId",
    header: "Video ID",
  },
  {
    accessorKey: "documentpath",
    header: "Document Path",
  },
  // Additional action dropdown can be added here
];
