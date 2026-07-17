import { useCallback, useMemo, useRef, useState } from "react"
import {
  LANG_MODE_STORAGE_KEY,
  LANG_MODES,
  LANG_ORDER_STORAGE_KEY,
  LangMode,
  LangOrder,
  LangProviderContext,
} from "./app-lang-context"

type LangProviderProps = {
  children: React.ReactNode
  defaultMode?: LangMode
  defaultOrder?: LangOrder
}

function isLangMode(value: string | null): value is LangMode {
  return value === "bilingual" || value === "en" || value === "zh"
}

function isLangOrder(value: string | null): value is LangOrder {
  return value === "en-first" || value === "zh-first"
}

function applyLangAttrs(mode: LangMode, order: LangOrder) {
  const root = window.document.documentElement
  root.dataset.lang = mode
  root.dataset.langOrder = order
}

export function LangProvider({
  children,
  defaultMode = "zh",
  defaultOrder = "en-first",
}: LangProviderProps) {
  const firstMount = useRef(true)
  const [mode, setModeState] = useState<LangMode>(() => {
    const stored = localStorage.getItem(LANG_MODE_STORAGE_KEY)
    return isLangMode(stored) ? stored : defaultMode
  })
  const [order, setOrderState] = useState<LangOrder>(() => {
    const stored = localStorage.getItem(LANG_ORDER_STORAGE_KEY)
    return isLangOrder(stored) ? stored : defaultOrder
  })
  const modeRef = useRef(mode)
  const orderRef = useRef(order)
  modeRef.current = mode
  orderRef.current = order

  // Apply on first paint to avoid a bilingual flash before React effects.
  if (firstMount.current) {
    const storedMode = localStorage.getItem(LANG_MODE_STORAGE_KEY)
    const storedOrder = localStorage.getItem(LANG_ORDER_STORAGE_KEY)
    applyLangAttrs(
      isLangMode(storedMode) ? storedMode : defaultMode,
      isLangOrder(storedOrder) ? storedOrder : defaultOrder,
    )
    firstMount.current = false
  }

  const setMode = useCallback((next: LangMode) => {
    localStorage.setItem(LANG_MODE_STORAGE_KEY, next)
    applyLangAttrs(next, orderRef.current)
    setModeState(next)
  }, [])

  const setOrder = useCallback((next: LangOrder) => {
    localStorage.setItem(LANG_ORDER_STORAGE_KEY, next)
    applyLangAttrs(modeRef.current, next)
    setOrderState(next)
  }, [])

  const cycleMode = useCallback(() => {
    const index = LANG_MODES.indexOf(modeRef.current)
    const next = LANG_MODES[(index + 1) % LANG_MODES.length]
    setMode(next)
  }, [setMode])

  const toggleOrder = useCallback(() => {
    setOrder(orderRef.current === "en-first" ? "zh-first" : "en-first")
  }, [setOrder])

  const value = useMemo(
    () => ({
      mode,
      order,
      setMode,
      setOrder,
      cycleMode,
      toggleOrder,
    }),
    [mode, order, setMode, setOrder, cycleMode, toggleOrder],
  )

  return (
    <LangProviderContext.Provider value={value}>
      {children}
    </LangProviderContext.Provider>
  )
}
