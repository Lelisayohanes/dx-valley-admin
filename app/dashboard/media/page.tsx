import { MediaData, columns } from "@/components/media/media-columns"
import { DataTable } from "@/components/media/media-data-table"
import { OrganizationInfo } from "@prisma/client"

async function getData(): Promise<MediaData[]> {
  return [
    {
      "id": "1",
      "mediaName": "Tech Expo 2024",
      "email": "test1@gmail.com",
      "phone": "123-456-7890",
      "city": "New York",
      "contentGenre": "Technology",
      "platform": "Expo"
    },
    {
      "id": "2",
      "mediaName": "Health Summit 2024",
      "email": "test2@gmail.com",
      "phone": "987-654-3210",
      "city": "Los Angeles",
      "contentGenre": "Healthcare",
      "platform": "Summit"
    },
    {
      "id": "3",
      "mediaName": "Finance Forum 2024",
      "email": "test3@gmail.com",
      "phone": "123-456-7891",
      "city": "Chicago",
      "contentGenre": "Finance",
      "platform": "Forum"
    },
    {
      "id": "4",
      "mediaName": "Education Conference 2024",
      "email": "test4@gmail.com",
      "phone": "987-654-3211",
      "city": "San Francisco",
      "contentGenre": "Education",
      "platform": "Conference"
    },
    {
      "id": "5",
      "mediaName": "Sustainability Expo 2024",
      "email": "test5@gmail.com",
      "phone": "123-456-7892",
      "city": "Seattle",
      "contentGenre": "Sustainability",
      "platform": "Expo"
    },
    {
      "id": "6",
      "mediaName": "AI Summit 2024",
      "email": "test6@gmail.com",
      "phone": "987-654-3212",
      "city": "Austin",
      "contentGenre": "Artificial Intelligence",
      "platform": "Summit"
    },
    {
      "id": "7",
      "mediaName": "Startup Forum 2024",
      "email": "test7@gmail.com",
      "phone": "123-456-7893",
      "city": "Boston",
      "contentGenre": "Startups",
      "platform": "Forum"
    },
    {
      "id": "8",
      "mediaName": "Cybersecurity Conference 2024",
      "email": "test8@gmail.com",
      "phone": "987-654-3213",
      "city": "Denver",
      "contentGenre": "Cybersecurity",
      "platform": "Conference"
    },
    {
      "id": "9",
      "mediaName": "Climate Change Expo 2024",
      "email": "test9@gmail.com",
      "phone": "123-456-7894",
      "city": "Portland",
      "contentGenre": "Climate Change",
      "platform": "Expo"
    },
    {
      "id": "10",
      "mediaName": "Renewable Energy Summit 2024",
      "email": "test10@gmail.com",
      "phone": "987-654-3214",
      "city": "San Diego",
      "contentGenre": "Renewable Energy",
      "platform": "Summit"
    },
    {
      "id": "11",
      "mediaName": "Blockchain Forum 2024",
      "email": "test11@gmail.com",
      "phone": "123-456-7895",
      "city": "Dallas",
      "contentGenre": "Blockchain",
      "platform": "Forum"
    },
    {
      "id": "12",
      "mediaName": "Biotech Conference 2024",
      "email": "test12@gmail.com",
      "phone": "987-654-3215",
      "city": "Houston",
      "contentGenre": "Biotechnology",
      "platform": "Conference"
    },
    {
      "id": "13",
      "mediaName": "Robotics Expo 2024",
      "email": "test13@gmail.com",
      "phone": "123-456-7896",
      "city": "Philadelphia",
      "contentGenre": "Robotics",
      "platform": "Expo"
    },
    {
      "id": "14",
      "mediaName": "FoodTech Summit 2024",
      "email": "test14@gmail.com",
      "phone": "987-654-3216",
      "city": "Phoenix",
      "contentGenre": "Food Technology",
      "platform": "Summit"
    },
    {
      "id": "15",
      "mediaName": "Agriculture Forum 2024",
      "email": "test15@gmail.com",
      "phone": "123-456-7897",
      "city": "San Antonio",
      "contentGenre": "Agriculture",
      "platform": "Forum"
    },
    {
      "id": "16",
      "mediaName": "Medical Devices Conference 2024",
      "email": "test16@gmail.com",
      "phone": "987-654-3217",
      "city": "Las Vegas",
      "contentGenre": "Medical Devices",
      "platform": "Conference"
    },
    {
      "id": "17",
      "mediaName": "FashionTech Expo 2024",
      "email": "test17@gmail.com",
      "phone": "123-456-7898",
      "city": "Miami",
      "contentGenre": "Fashion Technology",
      "platform": "Expo"
    },
    {
      "id": "18",
      "mediaName": "CleanTech Summit 2024",
      "email": "test18@gmail.com",
      "phone": "987-654-3218",
      "city": "Orlando",
      "contentGenre": "Clean Technology",
      "platform": "Summit"
    },
    {
      "id": "19",
      "mediaName": "Autonomous Vehicles Forum 2024",
      "email": "test19@gmail.com",
      "phone": "123-456-7899",
      "city": "Atlanta",
      "contentGenre": "Autonomous Vehicles",
      "platform": "Forum"
    },
    {
      "id": "20",
      "mediaName": "Green Energy Conference 2024",
      "email": "test20@gmail.com",
      "phone": "987-654-3219",
      "city": "Charlotte",
      "contentGenre": "Green Energy",
      "platform": "Conference"
    }
  ]
  
}

export default async function EventPage() {
  const data = await getData()

  return (
    <div className="container mx-auto pt-0 ">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

