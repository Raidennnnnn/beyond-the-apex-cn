import { tocChapters } from "@/components/filePaths";
import { Sidebar, SidebarMenu } from "./ui/sidebar";
import { SidebarContent } from "./ui/sidebar";
import CollapsibleSidebarMenuItem from "./app-sidebar-menu-item";
import { SidebarNavAccordionProvider } from "./sidebar-nav-accordion";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarNavAccordionProvider>
          <SidebarMenu className="p-2">
            {tocChapters.map((chapter) => (
              <CollapsibleSidebarMenuItem key={chapter.path} chapter={chapter} />
            ))}
          </SidebarMenu>
        </SidebarNavAccordionProvider>
      </SidebarContent>
    </Sidebar>
  );
}
