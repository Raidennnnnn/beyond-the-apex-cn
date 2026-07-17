import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TocPage } from "./filePaths";
import { flushSync } from "react-dom";
import { usePreferZhToc, useTocLabel } from "@/hooks/use-toc-label";

export default function QuickNavButton({
  type,
  navigateTo,
  className,
}: {
  type: "back" | "forward";
  navigateTo: TocPage | null;
  className?: string;
}) {
  const navigate = useNavigate();
  const label = useTocLabel();
  const preferZh = usePreferZhToc();

  return (
    <Button
      size="sm"
      variant="secondary"
      className={`h-full py-2 ${navigateTo ? "" : "invisible"} flex ${type === "back" ? "justify-start" : "justify-end"} w-1/2 md:w-fit whitespace-pre-wrap ${className}`}
      onClick={handleClick}
    >
      {type === "back" && <ArrowLeft className="w-4 h-4" />}
      {navigateTo ? (
        <div>
          <div
            lang={preferZh ? "zh" : "en"}
            className={`text-sm md:text-base text-primary ${type === "back" ? "text-left" : "text-right"}`}
          >
            {label(navigateTo.name, navigateTo.nameZh)}
          </div>
        </div>
      ) : (
        ""
      )}
      {type === "forward" && <ArrowRight className="w-4 h-4" />}
    </Button>
  );

  function handleClick() {
    if (!navigateTo) return;
    const destination = navigateTo.routePath;
    localStorage.setItem("currentAt", destination);

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
