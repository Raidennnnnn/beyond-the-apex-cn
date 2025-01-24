import { FilePath, filePaths } from './filePaths';
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import QuickNavButton from "./app-quick-nav-button";

export default function QuickNav() {
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

  return (
    <div className={`${!previous && !next ? 'hidden' : 'flex'} px-6 pt-2 pb-16 md:pb-4 flex justify-between items-center gap-2 w-full`}>
      <QuickNavButton type="back" navigateTo={previous} />
      <QuickNavButton type="forward" navigateTo={next} />
    </div>
  )
}