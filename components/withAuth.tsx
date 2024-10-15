"use client"; // This is for Next.js 13 and above
import { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Loading from "@/components/Loading"; // Adjust this import path as needed

// Generic HOC type definition with constraint
export function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
      const token = Cookies.get("accessToken");

      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/");
      }
    }, [router]);

    if (isAuthenticated === null) {
      return <Loading />;
    }

    if (!isAuthenticated) {
      return null; 
    }
    
    return <WrappedComponent {...props} />;
  };

  AuthenticatedComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthenticatedComponent;
}

export default withAuth;
