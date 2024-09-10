import { TrainersData, columns } from "@/components/trainers/trainers-columns"
import { DataTable } from "@/components/trainers/trainers-data-table"
import { OrganizationInfo } from "@prisma/client"

async function getData(): Promise<TrainersData[]> {
  return [
    {
      "id": "1",
      "fullName": "Smith John",
      "email": "smith.john1@gmail.com",
      "phone": "123-456-7890",
      "city": "New York",
      "expertise": "Agro tech",
      "profession": "Invest",
      "schedule": "2hr/week"
    },
    {
      "id": "2",
      "fullName": "Emily Davis",
      "email": "emily.davis2@gmail.com",
      "phone": "987-654-3210",
      "city": "Los Angeles",
      "expertise": "Healthcare",
      "profession": "Partnership",
      "schedule": "3hr/week"
    },
    {
      "id": "3",
      "fullName": "Michael Brown",
      "email": "michael.brown3@gmail.com",
      "phone": "123-456-7891",
      "city": "Chicago",
      "expertise": "Finance",
      "profession": "Investment",
      "schedule": "4hr/week"
    },
    {
      "id": "4",
      "fullName": "Sarah Wilson",
      "email": "sarah.wilson4@gmail.com",
      "phone": "987-654-3211",
      "city": "San Francisco",
      "expertise": "Education",
      "profession": "Sponsorship",
      "schedule": "2hr/week"
    },
    {
      "id": "5",
      "fullName": "David Johnson",
      "email": "david.johnson5@gmail.com",
      "phone": "123-456-7892",
      "city": "Seattle",
      "expertise": "Sustainability",
      "profession": "Invest",
      "schedule": "5hr/week"
    },
    {
      "id": "6",
      "fullName": "Laura Martinez",
      "email": "laura.martinez6@gmail.com",
      "phone": "987-654-3212",
      "city": "Austin",
      "expertise": "Artificial Intelligence",
      "profession": "Collaboration",
      "schedule": "3hr/week"
    },
    {
      "id": "7",
      "fullName": "James Taylor",
      "email": "james.taylor7@gmail.com",
      "phone": "123-456-7893",
      "city": "Boston",
      "expertise": "Startups",
      "profession": "Funding",
      "schedule": "4hr/week"
    },
    {
      "id": "8",
      "fullName": "Olivia Anderson",
      "email": "olivia.anderson8@gmail.com",
      "phone": "987-654-3213",
      "city": "Denver",
      "expertise": "Cybersecurity",
      "profession": "Invest",
      "schedule": "2hr/week"
    },
    {
      "id": "9",
      "fullName": "Daniel Harris",
      "email": "daniel.harris9@gmail.com",
      "phone": "123-456-7894",
      "city": "Portland",
      "expertise": "Climate Change",
      "profession": "Sponsorship",
      "schedule": "5hr/week"
    },
    {
      "id": "10",
      "fullName": "Isabella Clark",
      "email": "isabella.clark10@gmail.com",
      "phone": "987-654-3214",
      "city": "San Diego",
      "expertise": "Renewable Energy",
      "profession": "Investment",
      "schedule": "4hr/week"
    },
    {
      "id": "11",
      "fullName": "Ethan Lewis",
      "email": "ethan.lewis11@gmail.com",
      "phone": "123-456-7895",
      "city": "Dallas",
      "expertise": "Blockchain",
      "profession": "Collaboration",
      "schedule": "3hr/week"
    },
    {
      "id": "12",
      "fullName": "Sophia Walker",
      "email": "sophia.walker12@gmail.com",
      "phone": "987-654-3215",
      "city": "Houston",
      "expertise": "Biotechnology",
      "profession": "Funding",
      "schedule": "2hr/week"
    },
    {
      "id": "13",
      "fullName": "William Young",
      "email": "william.young13@gmail.com",
      "phone": "123-456-7896",
      "city": "Philadelphia",
      "expertise": "Robotics",
      "profession": "Investment",
      "schedule": "5hr/week"
    },
    {
      "id": "14",
      "fullName": "Megan Scott",
      "email": "megan.scott14@gmail.com",
      "phone": "987-654-3216",
      "city": "Phoenix",
      "expertise": "Food Technology",
      "profession": "Partnership",
      "schedule": "4hr/week"
    },
    {
      "id": "15",
      "fullName": "Robert King",
      "email": "robert.king15@gmail.com",
      "phone": "123-456-7897",
      "city": "San Antonio",
      "expertise": "Agriculture",
      "profession": "Invest",
      "schedule": "3hr/week"
    },
    {
      "id": "16",
      "fullName": "Ava Johnson",
      "email": "ava.johnson16@gmail.com",
      "phone": "987-654-3217",
      "city": "Las Vegas",
      "expertise": "Medical Devices",
      "profession": "Investment",
      "schedule": "2hr/week"
    },
    {
      "id": "17",
      "fullName": "Jacob Martinez",
      "email": "jacob.martinez17@gmail.com",
      "phone": "123-456-7898",
      "city": "Miami",
      "expertise": "Fashion Technology",
      "profession": "Funding",
      "schedule": "4hr/week"
    },
    {
      "id": "18",
      "fullName": "Emily Taylor",
      "email": "emily.taylor18@gmail.com",
      "phone": "987-654-3218",
      "city": "Orlando",
      "expertise": "Clean Technology",
      "profession": "Collaboration",
      "schedule": "3hr/week"
    },
    {
      "id": "19",
      "fullName": "Liam Anderson",
      "email": "liam.anderson19@gmail.com",
      "phone": "123-456-7899",
      "city": "Atlanta",
      "expertise": "Autonomous Vehicles",
      "profession": "Sponsorship",
      "schedule": "2hr/week"
    },
    {
      "id": "20",
      "fullName": "Charlotte Davis",
      "email": "charlotte.davis20@gmail.com",
      "phone": "987-654-3219",
      "city": "Charlotte",
      "expertise": "Green Energy",
      "profession": "Investment",
      "schedule": "5hr/week"
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

