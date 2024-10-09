"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast,Toaster } from "sonner";
import Cookies from "js-cookie";
import {
  CircleUser,
  Home,
  Menu,
  Package,
  ShieldCheck,
  BookUser,
  Building2,
  Contact2,
  Handshake,
  SquarePlay,
  PersonStanding,
  Logs,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/modeToggle";
import withAuth from "@/components/withAuth";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const SidebarNavItem = ({
  href,
  label,
  icon: Icon,
  active = false,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
}) => (
  <Link
    href={href}
    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
      active
        ? "bg-muted text-primary"
        : "text-muted-foreground hover:text-primary"
    }`}
  >
    <Icon className="h-4 w-4" />
    {label}
  </Link>
);

const UserDropdown = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove token from cookies
    Cookies.remove("accessToken");
  
    toast.success("Logged out successfully");
  
    // Redirect the user to the login page or homepage
    router.push("/"); 
  };
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        {/* Logout option */}
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="h-6 w-6" />
            <span>Admin</span>
          </Link>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <SidebarNavItem href="#" label="Dashboard" icon={Home} active />
          <SidebarNavItem
            href="/dashboard/user"
            label="User"
            icon={Package}
          />
          <SidebarNavItem
            href="/dashboard/event"
            label="Event"
            icon={Package}
          />
          <SidebarNavItem
            href="/dashboard/contactus"
            label="Contact Submissions"
            icon={Contact2}
          />
           <SidebarNavItem
            href="/dashboard/organization"
            label="Organizations"
            icon={Building2}
          />
          <SidebarNavItem
            href="/dashboard/media"
            label="Media"
            icon={SquarePlay}
          />
          <SidebarNavItem
            href="/dashboard/ip"
            label="Independent Partner"
            icon={Handshake}
          />
          <SidebarNavItem
            href="/dashboard/trainers"
            label="Trainers"
            icon={PersonStanding}
          />

          <SidebarNavItem
          href="/dashboard/subscriber"
          label="Subscriber"
          icon={Logs}
          />

        <SidebarNavItem
          href='/dashboard/interns'
          label='Interns'
          icon={PersonStanding}
        />

            <SidebarNavItem
            href="/dashboard/callforproposal"
            label="Startups"
            icon={Rocket}
          />

        </nav>
      </div>
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
        <Menu className='h-5 w-5' />
        <span className='sr-only'>Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side='left' className='flex flex-col'>
      <nav className='grid gap-2 text-lg font-medium'>
        <SidebarNavItem href='#' label='Dashboard' icon={Home} active />
        <SidebarNavItem href='/dashboard/user' label='User' icon={Package} />
        <SidebarNavItem href='/dashboard/event' label='Event' icon={Package} />
        <SidebarNavItem
          href='/dashboard/contactus'
          label='Contact Submissions'
          icon={Contact2}
        />
        <SidebarNavItem
          href='/dashboard/organization'
          label='Organizations'
          icon={Building2}
        />
        <SidebarNavItem
          href='/dashboard/media'
          label='Media'
          icon={SquarePlay}
        />
        <SidebarNavItem
          href='/dashboard/ip'
          label='Independent Partner'
          icon={Handshake}
        />
        <SidebarNavItem
          href='/dashboard/trainers'
          label='Trainers'
          icon={PersonStanding}
        />

        <SidebarNavItem
          href='/dashboard/subscriber'
          label='Subscriber'
          icon={Logs}
        />

        <SidebarNavItem
          href='/dashboard/interns'
          label='Interns'
          icon={Logs}
        />
        <SidebarNavItem
          href='/dashboard/callforproposal'
          label='Startups'
          icon={Rocket}
        />
      </nav>
    </SheetContent>
  </Sheet>
);

 function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileSidebar />
          <div className="w-full flex-1"></div>
          <ModeToggle />
          <UserDropdown />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          <div className="flex flex-1 items-start justify-center rounded-lg border border-dashed shadow-sm w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default withAuth(DashboardLayout)