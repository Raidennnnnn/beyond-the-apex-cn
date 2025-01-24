import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FilePath } from "./filePaths";
import { flushSync } from "react-dom";

export default function QuickNavButton({ type, navigateTo, className }: { type: 'back' | 'forward', navigateTo: FilePath | null, className?: string }) {
  const navigate = useNavigate();
  return (
    <Button 
      size="sm" 
      variant="secondary" 
      className={`h-full py-2 ${navigateTo ? '' : 'invisible'} flex ${type === 'back' ? 'justify-start' : 'justify-end'} w-1/2 md:w-fit whitespace-pre-wrap ${className}`} 
      onClick={handleClick}
    >
      { type === 'back' && <ArrowLeft className="w-4 h-4" /> }
      {
        navigateTo 
          ? <div>
            <div className={`text-sm md:text-base text-primary ${type === 'back' ? 'text-left' : 'text-right'}`}>{navigateTo.files[0].name}</div>
            <div className={`text-xs text-muted-foreground ${type === 'back' ? 'text-left' : 'text-right'}`}>{navigateTo.name}</div>
          </div>
          : ''
      }
      { type === 'forward' && <ArrowRight className="w-4 h-4" /> }
    </Button>
  )

  function handleClick() {
    if (navigateTo) {
      const destination = navigateTo.path + '/' + navigateTo.files[0].path || '/';
      localStorage.setItem('currentAt', destination);

      if (!document.startViewTransition) {
        navigate(destination);
      } else {
        document.startViewTransition(() => {
          flushSync(() => {
            navigate(destination);
          });
        });
      }
    }
  }
}
