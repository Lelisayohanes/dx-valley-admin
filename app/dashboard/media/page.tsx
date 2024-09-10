import { MediaData, columns } from "@/components/media/media-columns"
import { DataTable } from "@/components/media/media-data-table"
import { OrganizationInfo } from "@prisma/client"

async function getData(): Promise<MediaData[]> {
  const response = await fetch(`${process.env.SERVER_URL}/api/media`);

  if (!response.ok) {
    throw new Error('Failed to fetch media data');
  }

  const data = await response.json();

  // Transform the data
  const mediaData: MediaData[] = data.media.map((mediaItem: any) => ({
    id: mediaItem.id.toString(),
    mediaName: mediaItem.mediaName,
    email: mediaItem.contactInfo[0]?.email || '',
    phone: mediaItem.contactInfo[0]?.phoneNumberOne || '',
    city: mediaItem.addressInfo[0]?.city || '',
    contentGenre: mediaItem.contentGenre,
    platform: mediaItem.platform,
  }));

  return mediaData;
}

export default async function EventPage() {
  const data = await getData()

  return (
    <div className="container mx-auto pt-0 ">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

