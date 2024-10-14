"use client"; 

import { ColumnDef } from "@tanstack/react-table";

export type SubscriberData = {
  id: string;
  subscriberEmail: string;
};


export const columns: ColumnDef<SubscriberData>[] = [
  {
    accessorKey: "subscriberEmail",
    header: "Subscriber Email",
  },
  
];
