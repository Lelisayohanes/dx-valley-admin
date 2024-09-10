import { OrganizationData, columns } from "@/components/organization/organization-columns"
import { DataTable } from "@/components/constactus/contactus-data-table"
import { OrganizationInfo } from "@prisma/client"

async function getData(): Promise<OrganizationData[]> {
  return [
    {
      "id": "1",
      "organizationName": "Tech Expo 2024",
      "email": "test1@gmail.com",
      "phone": "123-456-7890",
      "city": "New York",
      "focusArea": "Technology",
      "organizationType": "Expo"
    },
    {
      "id": "2",
      "organizationName": "Health Summit 2024",
      "email": "test2@gmail.com",
      "phone": "987-654-3210",
      "city": "Los Angeles",
      "focusArea": "Healthcare",
      "organizationType": "Summit"
    },
    {
      "id": "3",
      "organizationName": "Finance Forum 2024",
      "email": "test3@gmail.com",
      "phone": "123-456-7891",
      "city": "Chicago",
      "focusArea": "Finance",
      "organizationType": "Forum"
    },
    {
      "id": "4",
      "organizationName": "Education Conference 2024",
      "email": "test4@gmail.com",
      "phone": "987-654-3211",
      "city": "San Francisco",
      "focusArea": "Education",
      "organizationType": "Conference"
    },
    {
      "id": "5",
      "organizationName": "Sustainability Expo 2024",
      "email": "test5@gmail.com",
      "phone": "123-456-7892",
      "city": "Seattle",
      "focusArea": "Sustainability",
      "organizationType": "Expo"
    },
    {
      "id": "6",
      "organizationName": "AI Summit 2024",
      "email": "test6@gmail.com",
      "phone": "987-654-3212",
      "city": "Austin",
      "focusArea": "Artificial Intelligence",
      "organizationType": "Summit"
    },
    {
      "id": "7",
      "organizationName": "Startup Forum 2024",
      "email": "test7@gmail.com",
      "phone": "123-456-7893",
      "city": "Boston",
      "focusArea": "Startups",
      "organizationType": "Forum"
    },
    {
      "id": "8",
      "organizationName": "Cybersecurity Conference 2024",
      "email": "test8@gmail.com",
      "phone": "987-654-3213",
      "city": "Denver",
      "focusArea": "Cybersecurity",
      "organizationType": "Conference"
    },
    {
      "id": "9",
      "organizationName": "Climate Change Expo 2024",
      "email": "test9@gmail.com",
      "phone": "123-456-7894",
      "city": "Portland",
      "focusArea": "Climate Change",
      "organizationType": "Expo"
    },
    {
      "id": "10",
      "organizationName": "Renewable Energy Summit 2024",
      "email": "test10@gmail.com",
      "phone": "987-654-3214",
      "city": "San Diego",
      "focusArea": "Renewable Energy",
      "organizationType": "Summit"
    },
    {
      "id": "11",
      "organizationName": "Blockchain Forum 2024",
      "email": "test11@gmail.com",
      "phone": "123-456-7895",
      "city": "Dallas",
      "focusArea": "Blockchain",
      "organizationType": "Forum"
    },
    {
      "id": "12",
      "organizationName": "Biotech Conference 2024",
      "email": "test12@gmail.com",
      "phone": "987-654-3215",
      "city": "Houston",
      "focusArea": "Biotechnology",
      "organizationType": "Conference"
    },
    {
      "id": "13",
      "organizationName": "Robotics Expo 2024",
      "email": "test13@gmail.com",
      "phone": "123-456-7896",
      "city": "Philadelphia",
      "focusArea": "Robotics",
      "organizationType": "Expo"
    },
    {
      "id": "14",
      "organizationName": "FoodTech Summit 2024",
      "email": "test14@gmail.com",
      "phone": "987-654-3216",
      "city": "Phoenix",
      "focusArea": "Food Technology",
      "organizationType": "Summit"
    },
    {
      "id": "15",
      "organizationName": "Agriculture Forum 2024",
      "email": "test15@gmail.com",
      "phone": "123-456-7897",
      "city": "San Antonio",
      "focusArea": "Agriculture",
      "organizationType": "Forum"
    },
    {
      "id": "16",
      "organizationName": "Medical Devices Conference 2024",
      "email": "test16@gmail.com",
      "phone": "987-654-3217",
      "city": "Las Vegas",
      "focusArea": "Medical Devices",
      "organizationType": "Conference"
    },
    {
      "id": "17",
      "organizationName": "FashionTech Expo 2024",
      "email": "test17@gmail.com",
      "phone": "123-456-7898",
      "city": "Miami",
      "focusArea": "Fashion Technology",
      "organizationType": "Expo"
    },
    {
      "id": "18",
      "organizationName": "CleanTech Summit 2024",
      "email": "test18@gmail.com",
      "phone": "987-654-3218",
      "city": "Orlando",
      "focusArea": "Clean Technology",
      "organizationType": "Summit"
    },
    {
      "id": "19",
      "organizationName": "Autonomous Vehicles Forum 2024",
      "email": "test19@gmail.com",
      "phone": "123-456-7899",
      "city": "Atlanta",
      "focusArea": "Autonomous Vehicles",
      "organizationType": "Forum"
    },
    {
      "id": "20",
      "organizationName": "Green Energy Conference 2024",
      "email": "test20@gmail.com",
      "phone": "987-654-3219",
      "city": "Charlotte",
      "focusArea": "Green Energy",
      "organizationType": "Conference"
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

