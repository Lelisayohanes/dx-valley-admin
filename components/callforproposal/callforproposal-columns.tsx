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
import VideoPlayer from "../video-player";

export type StartupsData = {
  id: string;
  startupName: string;
  email: string;
  phone: string;
  ideaDescription: string;
  stage: string;
  videoId: string;
  documentpath: string;
  videopath:string;
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
    id: "video",
    header: "Video",
    cell: ({ row }) => {
      const startup = row.original;
      console.log(startup.videopath)
      // Pass the video path (videoId) directly to the VideoPlayer
      return (
        <VideoPlayer videoPath={startup.videopath} />
      );
    },
  },
  {
    accessorKey: "documentpath",
    header: "Document Path",
  },
];




