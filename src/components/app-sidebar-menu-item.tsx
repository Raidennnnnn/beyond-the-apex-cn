import { ChevronDown } from "lucide-react";
import { useCallback, useRef } from "react";
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
import { TocChapter, TocSection } from "@/components/filePaths";
import { usePreferZhToc, useTocLabel } from "@/hooks/use-toc-label";
import { useSidebarNavAccordion } from "./sidebar-nav-accordion";

const TOGGLE_DEBOUNCE_MS = 250;

function useDebouncedOpenChange(onOpenChange: (next: boolean) => void) {
  const lastToggleRef = useRef(0);

  return useCallback(
    (next: boolean) => {
      const now = Date.now();
      const elapsed = lastToggleRef.current ? now - lastToggleRef.current : TOGGLE_DEBOUNCE_MS;

      if (elapsed < TOGGLE_DEBOUNCE_MS) return;

      lastToggleRef.current = now;
      onOpenChange(next);
    },
    [onOpenChange]
  );
}

function SectionCollapsibleMenuItem({
  section,
  chapterPath,
  pathname,
  label,
  lang,
  isMobile,
  setOpenMobile,
}: {
  section: TocSection;
  chapterPath: string;
  pathname: string;
  label: (name: string, nameZh: string) => string;
  lang: string;
  isMobile: boolean;
  setOpenMobile: (open: boolean) => void;
}) {
  const { openSectionPath, setOpenSection } = useSidebarNavAccordion();
  const sectionOpen = openSectionPath === section.path;
  const onSectionOpenChange = useDebouncedOpenChange((next) => {
    setOpenSection(next ? section.path : null, chapterPath);
  });

  return (
    <Collapsible open={sectionOpen} onOpenChange={onSectionOpenChange} className="group/section">
      <SidebarMenuSubItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className="h-fit py-1 font-medium w-full"
            lang={lang}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="truncate text-left">
              {label(section.name, section.nameZh)}
            </span>
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
                    lang={lang}
                    onClick={(e) => {
                      e.stopPropagation();
                      localStorage.setItem("currentAt", page.routePath);
                      if (isMobile) setOpenMobile(false);
                    }}
                  >
                    {label(page.name, page.nameZh)}
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuSubItem>
    </Collapsible>
  );
}

export default function CollapsibleSidebarMenuItem({ chapter }: { chapter: TocChapter }) {
  const { pathname } = useLocation();
  const { setOpenMobile, isMobile } = useSidebar();
  const label = useTocLabel();
  const preferZh = usePreferZhToc();
  const lang = preferZh ? "zh" : "en";
  const { openChapterPath, setOpenChapter } = useSidebarNavAccordion();
  const chapterOpen = openChapterPath === chapter.path;
  const onChapterOpenChange = useDebouncedOpenChange((next) => {
    setOpenChapter(next ? chapter.path : null);
  });

  return (
    <Collapsible open={chapterOpen} onOpenChange={onChapterOpenChange} className="group/collapsible">
      <SidebarMenuItem>
        {/* Trigger asChild → Button (shadcn pattern). The reverse merges two button
            onClicks and can toggle open→close in a single click. */}
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="h-fit" lang={lang}>
            {label(chapter.name, chapter.nameZh)}
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {chapter.sections.map((section) => (
              <SectionCollapsibleMenuItem
                key={section.path}
                section={section}
                chapterPath={chapter.path}
                pathname={pathname}
                label={label}
                lang={lang}
                isMobile={isMobile}
                setOpenMobile={setOpenMobile}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
