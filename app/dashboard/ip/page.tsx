import { IndependentPartnerData, columns } from "@/components/ip/ip-columns"
import { DataTable } from "@/components/ip/ip-data-table"
import { OrganizationInfo } from "@prisma/client"

async function getData(): Promise<IndependentPartnerData[]> {
  return [
    {
      "id": "1",
      "fullName": "Tech Expo 2024",
      "email": "test1@gmail.com",
      "phone": "123-456-7890",
      "city": "New York",
      "focusArea": "Agro tech",
      "interestArea": "Invest"
    },
    {
      "id": "2",
      "fullName": "Health Summit 2024",
      "email": "test2@gmail.com",
      "phone": "987-654-3210",
      "city": "Los Angeles",
      "focusArea": "Healthcare",
      "interestArea": "Partnership"
    },
    {
      "id": "3",
      "fullName": "Finance Forum 2024",
      "email": "test3@gmail.com",
      "phone": "123-456-7891",
      "city": "Chicago",
      "focusArea": "Finance",
      "interestArea": "Investment"
    },
    {
      "id": "4",
      "fullName": "Education Conference 2024",
      "email": "test4@gmail.com",
      "phone": "987-654-3211",
      "city": "San Francisco",
      "focusArea": "Education",
      "interestArea": "Sponsorship"
    },
    {
      "id": "5",
      "fullName": "Sustainability Expo 2024",
      "email": "test5@gmail.com",
      "phone": "123-456-7892",
      "city": "Seattle",
      "focusArea": "Sustainability",
      "interestArea": "Invest"
    },
    {
      "id": "6",
      "fullName": "AI Summit 2024",
      "email": "test6@gmail.com",
      "phone": "987-654-3212",
      "city": "Austin",
      "focusArea": "Artificial Intelligence",
      "interestArea": "Collaboration"
    },
    {
      "id": "7",
      "fullName": "Startup Forum 2024",
      "email": "test7@gmail.com",
      "phone": "123-456-7893",
      "city": "Boston",
      "focusArea": "Startups",
      "interestArea": "Funding"
    },
    {
      "id": "8",
      "fullName": "Cybersecurity Conference 2024",
      "email": "test8@gmail.com",
      "phone": "987-654-3213",
      "city": "Denver",
      "focusArea": "Cybersecurity",
      "interestArea": "Invest"
    },
    {
      "id": "9",
      "fullName": "Climate Change Expo 2024",
      "email": "test9@gmail.com",
      "phone": "123-456-7894",
      "city": "Portland",
      "focusArea": "Climate Change",
      "interestArea": "Sponsorship"
    },
    {
      "id": "10",
      "fullName": "Renewable Energy Summit 2024",
      "email": "test10@gmail.com",
      "phone": "987-654-3214",
      "city": "San Diego",
      "focusArea": "Renewable Energy",
      "interestArea": "Investment"
    },
    {
      "id": "11",
      "fullName": "Blockchain Forum 2024",
      "email": "test11@gmail.com",
      "phone": "123-456-7895",
      "city": "Dallas",
      "focusArea": "Blockchain",
      "interestArea": "Collaboration"
    },
    {
      "id": "12",
      "fullName": "Biotech Conference 2024",
      "email": "test12@gmail.com",
      "phone": "987-654-3215",
      "city": "Houston",
      "focusArea": "Biotechnology",
      "interestArea": "Funding"
    },
    {
      "id": "13",
      "fullName": "Robotics Expo 2024",
      "email": "test13@gmail.com",
      "phone": "123-456-7896",
      "city": "Philadelphia",
      "focusArea": "Robotics",
      "interestArea": "Investment"
    },
    {
      "id": "14",
      "fullName": "FoodTech Summit 2024",
      "email": "test14@gmail.com",
      "phone": "987-654-3216",
      "city": "Phoenix",
      "focusArea": "Food Technology",
      "interestArea": "Partnership"
    },
    {
      "id": "15",
      "fullName": "Agriculture Forum 2024",
      "email": "test15@gmail.com",
      "phone": "123-456-7897",
      "city": "San Antonio",
      "focusArea": "Agriculture",
      "interestArea": "Invest"
    },
    {
      "id": "16",
      "fullName": "Medical Devices Conference 2024",
      "email": "test16@gmail.com",
      "phone": "987-654-3217",
      "city": "Las Vegas",
      "focusArea": "Medical Devices",
      "interestArea": "Investment"
    },
    {
      "id": "17",
      "fullName": "FashionTech Expo 2024",
      "email": "test17@gmail.com",
      "phone": "123-456-7898",
      "city": "Miami",
      "focusArea": "Fashion Technology",
      "interestArea": "Funding"
    },
    {
      "id": "18",
      "fullName": "CleanTech Summit 2024",
      "email": "test18@gmail.com",
      "phone": "987-654-3218",
      "city": "Orlando",
      "focusArea": "Clean Technology",
      "interestArea": "Collaboration"
    },
    {
      "id": "19",
      "fullName": "Autonomous Vehicles Forum 2024",
      "email": "test19@gmail.com",
      "phone": "123-456-7899",
      "city": "Atlanta",
      "focusArea": "Autonomous Vehicles",
      "interestArea": "Sponsorship"
    },
    {
      "id": "20",
      "fullName": "Green Energy Conference 2024",
      "email": "test20@gmail.com",
      "phone": "987-654-3219",
      "city": "Charlotte",
      "focusArea": "Green Energy",
      "interestArea": "Investment"
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

