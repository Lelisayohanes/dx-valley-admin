import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { NotebookTabs } from "lucide-react";

interface DetailDisplayProps {
  internDetail: {
    fullName: string;
    email: string;
    phone: string;
    university: string;
    department: string;
    period: string;
    aboutYourself: string;
    year: number;
    interestAreas: string[];
    otherInterests: string;
    portfolioLink?: string;
    linkedinProfile?: string;
    gender: string;
    documentpath?: string;
  };
}

const DetailDisplay: React.FC<DetailDisplayProps> = ({ internDetail }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <NotebookTabs className="text-slate-400" />
          See more...
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white shadow-lg rounded-lg w-full max-w-md">
        <AlertDialogHeader className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold  text-black">
            {internDetail.fullName}{" "}
            <span className="text-lg">({internDetail.gender})</span>
          </h2>
        </AlertDialogHeader>
        <AlertDialogDescription className="p-2">
          {/* Profile Table */}
          <table className="w-full border-collapse">
            <tbody className="text-gray-700">
              <tr>
                <td className="py-2 px-4 font-semibold">Email:</td>
                <td className="py-2 px-4">{internDetail.email}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold">Phone:</td>
                <td className="py-2 px-4">{internDetail.phone}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold">University:</td>
                <td className="py-2 px-4">{internDetail.university}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold">Department:</td>
                <td className="py-2 px-4">{internDetail.department}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold">Period:</td>
                <td className="py-2 px-4">{internDetail.period}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold">Year:</td>
                <td className="py-2 px-4">{internDetail.year}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold">About Yourself:</td>
                <td className="py-2 px-4">{internDetail.aboutYourself}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold">Interest Areas:</td>
                <td className="py-2 px-4">{internDetail.interestAreas.join(", ")}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold">Other Interests:</td>
                <td className="py-2 px-4">{internDetail.otherInterests}</td>
              </tr>
              {internDetail.portfolioLink && (
                <tr>
                  <td className="py-2 px-4 font-semibold">Portfolio:</td>
                  <td className="py-2 px-4">
                    <a
                      href={internDetail.portfolioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </a>
                  </td>
                </tr>
              )}
              {internDetail.linkedinProfile && (
                <tr>
                  <td className="py-2 px-4 font-semibold">LinkedIn:</td>
                  <td className="py-2 px-4">
                    <a
                      href={internDetail.linkedinProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </a>
                  </td>
                </tr>
              )}
              {internDetail.documentpath && (
                <tr>
                  <td className="py-2 px-4 font-semibold">Document:</td>
                  <td className="py-2 px-4">
                    <a
                      href={internDetail.documentpath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </AlertDialogDescription>
        <AlertDialogFooter className="p-2 border-t border-gray-200">
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DetailDisplay;
