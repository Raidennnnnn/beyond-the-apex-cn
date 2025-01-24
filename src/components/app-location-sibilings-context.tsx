import { createContext } from "react";
import { FilePath } from "./filePaths";

export const LocationSibilingsContext = createContext<{
  previous: FilePath | null,
  next: FilePath | null,
}>({
  previous: null,
  next: null,
});


