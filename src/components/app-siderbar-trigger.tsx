import { Sidebar } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function AppSidebarTrigger() {
  const { openMobile, setOpenMobile } = useSidebar()

  const handleToggle = () => {
    if (openMobile) {
      setOpenMobile(false)
      return
    }
    // Defer open so the trigger pointer/click gesture finishes before overlay mounts
    window.setTimeout(() => setOpenMobile(true), 0)
  }

  return (
    <Button
      size="sm"
      variant="outline"
      data-sidebar="trigger"
      className="md:hidden transition-all w-8 md:w-auto px-1"
      onClick={(e) => {
        e.stopPropagation()
        handleToggle()
      }}
    >
      <Sidebar className="h-4 w-4" />
    </Button>
  )
}
