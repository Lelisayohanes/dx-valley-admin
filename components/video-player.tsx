import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
  
  interface VideoPlayerProps {
    videoPath: string;  
  }
  
  const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoPath }) => {
    
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost"><Youtube className="text-red-500"/>Play</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-blue-500  w-full">
          <AlertDialogHeader>
            {/* <AlertDialogTitle>Watch Video</AlertDialogTitle> */}
            <AlertDialogDescription>
              {videoPath ? (
                <video controls width="100%" src={`http://localhost:3000/${videoPath}`}>
                  Your browser does not support the video tag.
                </video>
              ) : (
                `${videoPath} "No video available."}`
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default VideoPlayer;
  