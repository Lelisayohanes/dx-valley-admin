import { NextResponse } from "next/server";

// Function to fetch data from the external server
async function fetchIndependentPartnerDataFromServer() {
  const response = await fetch(
    `${process.env.SERVER_URL}/api/independentpartner/getip`
  ); // Use a server-side environment variable (without NEXT_PUBLIC_)

  if (!response.ok) {
    throw new Error("Failed to fetch data from external server");
  }

  const data = await response.json();
  return data;
}

// Define the GET handler explicitly (instead of default export)
export async function GET() {
  try {
    // Fetch the data from the external API
    const data = await fetchIndependentPartnerDataFromServer();
    // Return the data to the client
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching independent partner data:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
