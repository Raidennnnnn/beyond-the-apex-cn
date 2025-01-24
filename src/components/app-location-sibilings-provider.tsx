import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { LocationSibilingsContext } from "./app-location-sibilings-context";
import { FilePath, filePaths } from "./filePaths";

export default function LocationSibilingsProvider(
  { children }: { children: React.ReactNode }
) {
  const { pathname } = useLocation();
  
  const [, parentPath, path] = pathname.split('/');
  const [previous, setPrevious] = useState<FilePath | null>(null);
  const [next, setNext] = useState<FilePath | null>(null);

  useEffect(() => {
    const currentParentIndex = filePaths.findIndex(item => item.path === parentPath);
    const currentParent = filePaths[currentParentIndex];

    if (!currentParent) {
      setPrevious(null);
      setNext(null);
      return;
    };

    const currentIndex = currentParent.files.findIndex(item => item.path === path);

    if (currentIndex > 0 && currentIndex < currentParent.files.length - 1) {
      setPrevious({ ...currentParent, files: [currentParent.files[currentIndex - 1]] });
      setNext({ ...currentParent, files: [currentParent.files[currentIndex + 1]] });
    }

    if (currentIndex === 0) {
      setNext({ ...currentParent, files: [currentParent.files[1]] });

      if (currentParentIndex > 0) {
        const previousParent = filePaths[currentParentIndex - 1];
        setPrevious({ ...previousParent, files: [previousParent.files[previousParent.files.length - 1]] });
      } else {
        setPrevious(null);
      }
    }

    if (currentIndex === currentParent.files.length - 1) {
      setPrevious({ ...currentParent, files: [currentParent.files[currentParent.files.length - 2]] });

      if (currentParentIndex < filePaths.length - 1) {
        const nextParent = filePaths[currentParentIndex + 1];
        setNext({ ...nextParent, files: [nextParent.files[0]] });
      } else {
        setNext(null);
      }
    }
  }, [parentPath, path]);

  return <LocationSibilingsContext.Provider value={{ previous, next }}>
    {children}
  </LocationSibilingsContext.Provider>
}