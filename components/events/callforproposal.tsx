<<<<<<< HEAD
/** @format */

"use client";
import React, { useEffect, useState } from "react";
import { Event } from "@/types/types";
=======
"use client";
import React, { useEffect, useState } from "react";

>>>>>>> 311bcd602360021fb008c6248144a2825ca6fec6
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Countdown from "./countdown";
import { useRouter } from "next/navigation";
<<<<<<< HEAD
// import { Router} from "next/router"
=======
import { Event } from "@/types/types";
>>>>>>> 311bcd602360021fb008c6248144a2825ca6fec6

export default function Callforproposal() {
  const [events, setEvents] = useState<Event[]>([]);
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({});

  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/event");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.error("Expected an array but received:", data);
          setEvents([]);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      }
    };

    fetchEvents();
  }, []); // Only run once, on moun

  const handleTimeLeftCalculated = (id: string, calculatedTimeLeft: string) => {
    setTimeLeft((prev) => ({
      ...prev,
      [id]: calculatedTimeLeft,
    }));
  };

  const callForProposalEvents = events.filter(
    (event) => event.category === "call for proposal"
  );

  return (
<<<<<<< HEAD
    <div className='container w-2/3 my-16 h-1/2'>
=======
    <div className="container w-2/3 my-16 h-1/2">
>>>>>>> 311bcd602360021fb008c6248144a2825ca6fec6
      {callForProposalEvents.length > 0 ? (
        callForProposalEvents.map((event) => (
          <div key={event.id}>
            <Countdown
              event={event}
              renderUI={false}
              onTimeLeftCalculated={(calculatedTimeLeft) =>
                handleTimeLeftCalculated(event.id.toString(), calculatedTimeLeft)
              }
            />
            <Card>
<<<<<<< HEAD
              <CardHeader className=' flex flex-row justify-between p-4  rounded-lg m-4 sm:m-4'>
                <CardTitle className='text-3xl lg:text-3xl sm:text-lg'>
                  Call for Start Up Proposal
                </CardTitle>
                <div className='h-full align-middle'>
                  <p className='text-2xl flex text-left text-red-500 font-mono leading-none'>
=======
              <CardHeader className=" flex flex-row justify-between p-4  rounded-lg m-4 sm:m-4">
                <CardTitle className="text-3xl lg:text-3xl sm:text-lg">
                  Call for Start Up Proposal
                </CardTitle>
                <div className="h-full align-middle">
                  <p className="text-2xl flex text-left text-red-500 font-mono leading-none">
>>>>>>> 311bcd602360021fb008c6248144a2825ca6fec6
                    {timeLeft[event?.id] || "Calculating..."}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="ailgn-center justify-around items-center">
<<<<<<< HEAD
                <p className='mb-6 font-light text-gray-500 md:text-lg h-4/5 justify-around items-center dark:text-gray-400'>
=======
                <p className="mb-6 font-light text-gray-500 md:text-lg h-4/5 justify-around items-center dark:text-gray-400">
>>>>>>> 311bcd602360021fb008c6248144a2825ca6fec6
                  {event.description}
                </p>

                <Button
<<<<<<< HEAD
                  className='bg-coopBlue text-white font-bold cursor-pointer px-6 py-2 hover:bg-coopBlueHover'
=======
                  className="bg-coopBlue text-white font-bold cursor-pointer px-6 py-2 hover:bg-coopBlueHover"
>>>>>>> 311bcd602360021fb008c6248144a2825ca6fec6
                  onClick={() => {
                    let formRoute = "/incubationform";
                    const eventId = event.id.toString();
                    router.push(`${formRoute}?eventId=${eventId}`);
<<<<<<< HEAD
                  }}>
=======
                  }}
                >
>>>>>>> 311bcd602360021fb008c6248144a2825ca6fec6
                  Apply
                </Button>
              </CardContent>
            </Card>
          </div>
        ))
<<<<<<< HEAD
      ) :  <div className='col-span-full text-center py-10 min-h-full'>
          <p className='text-lg font-semibold h-fit'>No Call Available.</p>
     
          </div>}
      
=======
      ) : (
        <div className="col-span-full text-center py-10 min-h-full">
          <p className="text-lg font-semibold h-fit">No Call Available.</p>
        </div>
      )}
>>>>>>> 311bcd602360021fb008c6248144a2825ca6fec6
    </div>
  );
}
