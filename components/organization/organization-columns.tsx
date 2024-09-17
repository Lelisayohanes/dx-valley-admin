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

export type OrganizationData = {
  id: string;
  organizationName: string;
  email: string;
  phone: string;
  city: string;
  focusArea: string;
  organizationType: string;
};


export const columns: ColumnDef<OrganizationData>[] = [
  {
    accessorKey: "organizationName",
    header: "Organization Name",
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
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "focusArea",
    header: "Focus Area",
  },
  {
    accessorKey: "organizationType",
    header: "Organization Type",
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const event = row.original;
  //     const [isMounted, setIsMounted] = useState(false);

  //     useEffect(() => {
  //       if (typeof window !== "undefined") {
  //         setIsMounted(true);
  //       }
  //     }, []);

  //     const handleViewTeam = (eventId: string) => {
  //       if (isMounted) {
  //         // Use window.location.href to navigate
  //         window.location.href = `/admin/dashboard/event/${eventId}`;
  //       }
  //     };

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem onClick={() => handleViewTeam(event.id)}>
  //             View Team
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
