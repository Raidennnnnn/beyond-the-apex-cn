import { createContext } from "react"

/** Visible language(s) for page content. */
export type LangMode = "bilingual" | "en" | "zh"

/** Stack order when mode is bilingual. */
export type LangOrder = "en-first" | "zh-first"

type LangProviderState = {
  mode: LangMode
  order: LangOrder
  setMode: (mode: LangMode) => void
  setOrder: (order: LangOrder) => void
  cycleMode: () => void
  toggleOrder: () => void
}

const initialState: LangProviderState = {
  mode: "zh",
  order: "en-first",
  setMode: () => null,
  setOrder: () => null,
  cycleMode: () => null,
  toggleOrder: () => null,
}

export const LangProviderContext = createContext<LangProviderState>(initialState)

export const LANG_MODE_STORAGE_KEY = "apex-lang-mode"
export const LANG_ORDER_STORAGE_KEY = "apex-lang-order"

export const LANG_MODES: LangMode[] = ["bilingual", "en", "zh"]
