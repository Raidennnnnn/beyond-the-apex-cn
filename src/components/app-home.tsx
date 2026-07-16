import Brand from "./app-home-brand";
import { flatTocPages, TocPage } from "./filePaths";
import { useMemo } from "react";
import QuickNavButton from "./app-quick-nav-button";

export default function AppHome() {
  const current: TocPage = useMemo(() => {
    const currentAt = localStorage.getItem("currentAt")?.replace(/^\//, "");
    if (!currentAt) return flatTocPages[0];
    return flatTocPages.find((p) => p.routePath === currentAt) ?? flatTocPages[0];
  }, []);

  return (
    <div className="w-full h-full">
      <Brand className="self-center" />
      <QuickNavButton
        type="forward"
        navigateTo={current}
        className="fixed bottom-0 right-0 mx-2 my-16 h-fit"
      />
    </div>
  );
}
