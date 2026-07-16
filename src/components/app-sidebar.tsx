import { tocChapters } from "@/components/filePaths";
import { Sidebar, SidebarMenu } from "./ui/sidebar";
import { SidebarContent } from "./ui/sidebar";
import CollapsibleSidebarMenuItem from "./app-sidebar-menu-item";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu className="p-2">
          {tocChapters.map((chapter) => (
            <CollapsibleSidebarMenuItem key={chapter.path} chapter={chapter} />
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
