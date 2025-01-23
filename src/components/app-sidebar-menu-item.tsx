import { CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, useSidebar } from "./ui/sidebar";
import { Collapsible } from "./ui/collapsible";
import { Link, useLocation } from "react-router";
import { FilePath } from "@/components/filePaths";

export default function CollapsibleSidebarMenuItem({ folder }: { folder: FilePath }) {
  const { pathname } = useLocation();
  const { toggleSidebar, isMobile } = useSidebar()

  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarMenuItem>
        <SidebarMenuButton asChild className="h-fit">
          <CollapsibleTrigger >
            {folder.name}
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarMenuButton>
        <CollapsibleContent>
          <SidebarMenuSub>
            {folder.files.map((file) => (
              <SidebarMenuSubItem key={file.path}>
                <SidebarMenuSubButton asChild className="h-fit py-1" isActive={`/${folder.path}/${file.path}` === pathname}>
                  <Link 
                    to={`/${folder.path}/${file.path}`} 
                    onClick={() => {
                      localStorage.setItem('currentAt', `/${folder.path}/${file.path}`);
                      if (isMobile) toggleSidebar();
                    }}>
                    {file.name}
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}