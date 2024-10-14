"use client"; // Indicate this component should be rendered on the client
import { useEffect, useState } from "react";
import { MediaData, columns } from "@/components/media/media-columns";
import { DataTable } from "@/components/media/media-data-table";
import withAuth from "@/components/withAuth";

const MediaPage = () => {
  const [data, setData] = useState<MediaData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/media`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch media data');
        }

        const result = await response.json();
        
        // Transform the data
        const mediaData: MediaData[] = result.media.map((mediaItem: any) => ({
          id: mediaItem.id.toString(),
          mediaName: mediaItem.mediaName,
          email: mediaItem.contactInfo[0]?.email || '',
          phone: mediaItem.contactInfo[0]?.phoneNumberOne || '',
          city: mediaItem.addressInfo[0]?.city || '',
          contentGenre: mediaItem.contentGenre,
          platform: mediaItem.platform,
        }));

        setData(mediaData);
      } catch (error) {
        console.error('Error fetching media data:', error);
        setError((error as Error).message || 'An error occurred'); // Type assertion
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []); // Run once on component mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto pt-0 flex items-start">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default withAuth(MediaPage);
