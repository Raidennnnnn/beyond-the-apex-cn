import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

export default function NaviWrapper({ children }: { children: React.ReactNode }) { 
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);
  return children;
}