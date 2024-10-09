import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Loading from "@/components/Loading";

export function withAuth(WrappedComponent) {

  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

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
