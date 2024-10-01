"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // Import toast

export default function CreateUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        toast.success("User created successfully!", {
          description: "The new user has been registered.",
        });
        setUsername("");
        setPassword("");
        setEmail("");
        router.push("/dashboard");
      } else {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.message || "An error occurred during registration.";
        toast.error("User creation failed", {
          description: errorMessage,
        });
      }
    } catch (error) {
      toast.error("Registration error", {
        description: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Create User</CardTitle>
        <CardDescription>Fill in the details to create a new user.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <Button className="bg-coopBlue text-white font-bold cursor-pointer px-6 py-2 mt-3 hover:bg-amber-500">
            Create User
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
