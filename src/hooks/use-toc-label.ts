import { useLang } from "@/hooks/use-lang"

/** Prefer Chinese TOC labels in zh-only mode, or bilingual with 中文优先. */
export function usePreferZhToc() {
  const { mode, order } = useLang()
  return mode === "zh" || (mode === "bilingual" && order === "zh-first")
}

export function useTocLabel() {
  const preferZh = usePreferZhToc()

  return (name: string, nameZh: string) => (preferZh ? nameZh : name)
}
