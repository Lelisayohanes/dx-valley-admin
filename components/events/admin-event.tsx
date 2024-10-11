/** @format */

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Editor } from "primereact/editor"; // PrimeReact Editor
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
// import DOMPurify from "dompurify"; // Import DOMPurify to sanitize HTML
import DOMPurify from "dompurify";

export default function AdminEvent() {
  const [formData, setFormData] = useState({
    name: "",
    description: "", // For rich text
    targetDate: undefined as Date | undefined,
    category: "",
  });
  const router = useRouter();

  // Handle input changes for all inputs
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle RichTextEditor changes
  // const handleRichTextChange = (e: any) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     description: e.htmlValue, // PrimeReact editor content (HTML)
  //   }));
  // };

  const handleRichTextChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      description: DOMPurify.sanitize(value, {
        ALLOWED_TAGS: [
          "b",
          "i",
          "em",
          "strong",
          "u",
          "p",
          "br",
          "ul",
          "ol",
          "li",
        ],
      }), // add allowed tags
    }));
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await fetch("/api/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Registration successful!", {
        description: "Event has been submitted successfully.",
      });
      setFormData({
        name: "",
        description: "",
        targetDate: undefined,
        category: "",
      });
      router.push("/dashboard/event");
    } else {
      const errorMessage = await response.json();
      console.error("Error:", errorMessage);
      toast.error("Registration failed", {
        description:
          errorMessage?.error.message ||
          "An error occurred during registration.",
      });
      router.push("/dashboard/event");
    }
  };

  return (
    <Card className='w-[500px]'>
      <CardHeader>
        <CardTitle>Event</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input  
                type='text'
                placeholder='Event Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* PrimeReact Editor for rich text input */}
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='description'>Description</Label>
              <div
                style={{
                  resize: "both",
                  overflow: "auto",
                  width: "100%",
                  minHeight: "320px",
                }}>
                <Editor
                  value={formData.description}
                  onTextChange={(e) => handleRichTextChange(e.htmlValue || "")}
                  style={{ height: "320px", width: "100%" }}
                />
              </div>
            </div>

            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='targetDate'>Target date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[450px] justify-start text-left font-normal",
                      !formData.targetDate && "text-muted-foreground"
                    )}>
                    <CalendarIcon className='mr-2 h-4 w-4' />
                    {formData.targetDate
                      ? format(formData.targetDate, "PPP")
                      : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                  <Calendar
                    mode='single'
                    selected={formData.targetDate}
                    onSelect={(date) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        targetDate: date || undefined,
                      }))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='category'>Event Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    category: value,
                  }))
                }>
                <SelectTrigger id='category'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='contest'>Contest</SelectItem>
                  <SelectItem value='tech expo'>Tech Expo</SelectItem>
                  <SelectItem value='call for proposal'>
                    Call for Proposal
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className='admin-event-btn bg-coopBlue text-white font-bold cursor-pointer px-6 py-2 hover:bg-amber-500'>
            Create event
          </Button>
        </form>

        {/* Render the rich text HTML safely using DOMPurify */}
        {formData.description && (
          <div
            className='mt-4'
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(formData.description), // Sanitize and render HTML
            }}
          />
        )}
      </CardContent>
    </Card>
  );
}
