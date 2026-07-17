import { useContext } from "react"
import { LangProviderContext } from "../components/app-lang-context"

export const useLang = () => {
  const context = useContext(LangProviderContext)

  if (context === undefined)
    throw new Error("useLang must be used within a LangProvider")

  return context
}
