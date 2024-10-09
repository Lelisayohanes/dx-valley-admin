import type { NextApiRequest, NextApiResponse } from 'next';

// Function to fetch data from the external server
async function fetchIndependentPartnerDataFromServer() {
  const response = await fetch(`${process.env.SERVER_URL}/api/independentpartner/getip`); // Use a server-side environment variable (without NEXT_PUBLIC_)
    
  if (!response.ok) {
    throw new Error('Failed to fetch data from external server');
  }

  const data = await response.json();
  return data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Fetch the data from the external API
    const data = await fetchIndependentPartnerDataFromServer();
    // Return the data to the client
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching independent partner data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
