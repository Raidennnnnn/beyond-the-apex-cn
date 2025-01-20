import { CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from "./ui/sidebar";
import { useState } from "react";
import { Collapsible } from "./ui/collapsible";
import { Link } from "react-router";

export default function CollapsibleSidebarMenuItem({ folder }: { folder: { name: string; path: string; files: { path: string; name: string }[] } }) {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible defaultOpen={open} onOpenChange={setOpen} className="group/collapsible">
      <SidebarMenuItem >
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
                <SidebarMenuSubButton asChild className="h-fit">
                  <Link to={`/${folder.path}/${file.path}`}>{file.name}</Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}