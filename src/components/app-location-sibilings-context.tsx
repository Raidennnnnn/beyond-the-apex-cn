import { createContext } from "react";
import { TocPage } from "./filePaths";

export const LocationSibilingsContext = createContext<{
  previous: TocPage | null;
  next: TocPage | null;
}>({
  previous: null,
  next: null,
});
