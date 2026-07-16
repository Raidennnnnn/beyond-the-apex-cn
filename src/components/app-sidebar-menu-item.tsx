import { ChevronDown } from "lucide-react";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "./ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Link, useLocation } from "react-router";
import { TocChapter } from "@/components/filePaths";

export default function CollapsibleSidebarMenuItem({ chapter }: { chapter: TocChapter }) {
  const { pathname } = useLocation();
  const { toggleSidebar, isMobile } = useSidebar();
  const chapterActive = chapter.sections.some((s) =>
    s.pages.some((p) => `/${p.routePath}` === pathname)
  );

  return (
    <Collapsible defaultOpen={chapterActive} className="group/collapsible">
      <SidebarMenuItem>
        {/* Trigger asChild → Button (shadcn pattern). The reverse merges two button
            onClicks and can toggle open→close in a single click. */}
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="h-fit">
            {chapter.name}
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {chapter.sections.map((section) => {
              const sectionActive = section.pages.some(
                (p) => `/${p.routePath}` === pathname
              );
              return (
                <Collapsible
                  key={section.path}
                  defaultOpen={sectionActive}
                  className="group/section"
                >
                  <SidebarMenuSubItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className="h-fit py-1 font-medium w-full"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="truncate text-left">{section.name}</span>
                        <ChevronDown className="ml-auto size-4 shrink-0 transition-transform group-data-[state=open]/section:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {section.pages.map((page) => (
                          <SidebarMenuSubItem key={page.routePath}>
                            <SidebarMenuSubButton
                              asChild
                              className="h-fit py-1"
                              isActive={`/${page.routePath}` === pathname}
                            >
                              <Link
                                viewTransition
                                to={`/${page.routePath}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  localStorage.setItem("currentAt", page.routePath);
                                  if (isMobile) toggleSidebar();
                                }}
                              >
                                {page.name}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuSubItem>
                </Collapsible>
              );
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
