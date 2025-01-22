import { filePaths } from "@/components/filePaths";
import { Sidebar, SidebarMenu } from "./ui/sidebar";
import { SidebarContent } from "./ui/sidebar";
import CollapsibleSidebarMenuItem from "./sidebar-menu-item";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu className="p-2">
          {filePaths.map((folder, index) => <CollapsibleSidebarMenuItem key={index} folder={folder} />)}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
