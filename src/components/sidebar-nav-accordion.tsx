import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import { tocChapters } from "@/components/filePaths";

type SidebarNavAccordionContextValue = {
  openChapterPath: string | null;
  openSectionPath: string | null;
  setOpenChapter: (path: string | null) => void;
  setOpenSection: (sectionPath: string | null, chapterPath: string) => void;
};

const SidebarNavAccordionContext = createContext<SidebarNavAccordionContextValue | null>(null);

function findActiveFromPathname(pathname: string) {
  for (const chapter of tocChapters) {
    for (const section of chapter.sections) {
      if (section.pages.some((page) => `/${page.routePath}` === pathname)) {
        return { chapterPath: chapter.path, sectionPath: section.path };
      }
    }
  }
  return null;
}

export function useSidebarNavAccordion() {
  const context = useContext(SidebarNavAccordionContext);
  if (!context) {
    throw new Error("useSidebarNavAccordion must be used within SidebarNavAccordionProvider.");
  }
  return context;
}

export function SidebarNavAccordionProvider({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const active = useMemo(() => findActiveFromPathname(pathname), [pathname]);
  const [openChapterPath, setOpenChapterPath] = useState<string | null>(
    () => active?.chapterPath ?? null
  );
  const [openSectionPath, setOpenSectionPath] = useState<string | null>(
    () => active?.sectionPath ?? null
  );

  useEffect(() => {
    if (active) {
      setOpenChapterPath(active.chapterPath);
      setOpenSectionPath(active.sectionPath);
    }
  }, [active?.chapterPath, active?.sectionPath]);

  const setOpenChapter = useCallback(
    (path: string | null) => {
      setOpenChapterPath(path);
      if (path === null) {
        setOpenSectionPath(null);
        return;
      }

      setOpenSectionPath((currentSection) => {
        const chapter = tocChapters.find((c) => c.path === path);
        if (currentSection && chapter?.sections.some((s) => s.path === currentSection)) {
          return currentSection;
        }

        const activeForPath = findActiveFromPathname(pathname);
        if (activeForPath?.chapterPath === path) {
          return activeForPath.sectionPath;
        }

        return null;
      });
    },
    [pathname]
  );

  const setOpenSection = useCallback((sectionPath: string | null, chapterPath: string) => {
    setOpenChapterPath(chapterPath);
    setOpenSectionPath(sectionPath);
  }, []);

  return (
    <SidebarNavAccordionContext.Provider
      value={{ openChapterPath, openSectionPath, setOpenChapter, setOpenSection }}
    >
      {children}
    </SidebarNavAccordionContext.Provider>
  );
}
