import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { FilePath, filePaths } from './filePaths';
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function QuickNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [, parentPath, path] = pathname.split('/');
  const [previous, setPrevious] = useState<FilePath | null>(null);
  const [next, setNext] = useState<FilePath | null>(null);

  useEffect(() => {
    const currentParentIndex = filePaths.findIndex(item => item.path === parentPath);
    const currentParent = filePaths[currentParentIndex];

    if (!currentParent) return;
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
    <div className="px-2 py-2 flex justify-between items-center gap-2 w-full">
      <Button 
        size="sm" 
        variant="secondary" 
        className={`h-full py-2 ${previous ? '' : 'invisible'} flex justify-start max-w-[50%] whitespace-pre-wrap`} 
        onClick={() => {
          if (previous) {
            navigate(previous.path + '/' + previous.files[0].path || '/');
          }
        }}
      >
        <ArrowLeft className="w-4 h-4" />
        {
          previous 
            ? <div>
              <div className="text-sm md:text-base text-primary text-left">{previous.files[0].name}</div>
              <div className="text-xs text-muted-foreground text-left">{previous.name}</div>
            </div>
            : ''
        }
      </Button>
      <Button 
        variant="secondary" 
        size="sm" 
        className={`h-full py-2 ${next ? '' : 'invisible'} w-1/2 md:w-fit flex justify-end max-w-[50%] whitespace-pre-wrap`} 
        onClick={() => {
          if (next) {
            navigate(next.path + '/' + next.files[0].path || '/');
          }
        }}
      >
        {
          next 
            ? <div>
              <div className="text-sm md:text-base text-primary text-right">{next.files[0].name}</div>
              <div className="text-xs text-muted-foreground text-right">{next.name}</div>
            </div>
            : ''
        }
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  )
}