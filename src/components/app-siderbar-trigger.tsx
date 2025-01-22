import { Sidebar } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function AppSidebarTrigger() {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      size="sm"
      variant="outline"
      className="md:hidden transition-all w-8 md:w-auto px-1"
      onClick={toggleSidebar}
    > 
      <Sidebar className="h-4 w-4" />
    </Button>
  )
}