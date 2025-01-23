import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FilePath } from "./filePaths";

export default function QuickNavButton({ type, navigateTo }: { type: 'back' | 'forward', navigateTo: FilePath | null }) {
  const navigate = useNavigate();
  return (
    <Button 
      size="sm" 
      variant="secondary" 
      className={`h-full py-2 ${navigateTo ? '' : 'invisible'} flex ${type === 'back' ? 'justify-start' : 'justify-end'} max-w-[50%] whitespace-pre-wrap`} 
      onClick={() => {
        if (navigateTo) {
          navigate(navigateTo.path + '/' + navigateTo.files[0].path || '/');
        }
      }}
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
}
