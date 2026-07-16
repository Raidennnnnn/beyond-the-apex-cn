import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { LocationSibilingsContext } from "./app-location-sibilings-context";
import { flatTocPages, TocPage } from "./filePaths";

export default function LocationSibilingsProvider(
  { children }: { children: React.ReactNode }
) {
  const { pathname } = useLocation();
  const routePath = pathname.replace(/^\//, "");
  const [previous, setPrevious] = useState<TocPage | null>(null);
  const [next, setNext] = useState<TocPage | null>(null);

  useEffect(() => {
    const index = flatTocPages.findIndex((p) => p.routePath === routePath);
    if (index === -1) {
      setPrevious(null);
      setNext(null);
      return;
    }
    setPrevious(index > 0 ? flatTocPages[index - 1] : null);
    setNext(index < flatTocPages.length - 1 ? flatTocPages[index + 1] : null);
  }, [routePath]);

  return (
    <LocationSibilingsContext.Provider value={{ previous, next }}>
      {children}
    </LocationSibilingsContext.Provider>
  );
}
