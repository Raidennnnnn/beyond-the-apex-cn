import { LocationSibilingsContext } from "@/components/app-location-sibilings-context";
import { useContext } from "react";

export const useLocationSibilings = () => {
  const context = useContext(LocationSibilingsContext);

  if (!context) {
    throw new Error("useLocationSibilings must be used within a LocationSibilingsProvider");
  }

  return context;
}