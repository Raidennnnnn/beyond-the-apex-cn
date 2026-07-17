import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLang } from "@/hooks/use-lang"
import type { LangMode, LangOrder } from "./app-lang-context"

const MODE_LABELS: Record<LangMode, string> = {
  bilingual: "EN + 中文",
  en: "English",
  zh: "中文",
}

export default function LangToggle() {
  const { mode, order, setMode, setOrder } = useLang()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="shrink-0 gap-1 px-2"
          aria-label="Language mode"
        >
          <Languages className="size-4" />
          <span className="hidden md:inline text-xs">{MODE_LABELS[mode]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={mode}
          onValueChange={(value) => setMode(value as LangMode)}
        >
          <DropdownMenuRadioItem value="bilingual">
            EN + 中文
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="zh">中文</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Order</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={order}
          onValueChange={(value) => setOrder(value as LangOrder)}
        >
          <DropdownMenuRadioItem value="en-first" disabled={mode !== "bilingual"}>
            English first
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="zh-first" disabled={mode !== "bilingual"}>
            中文优先
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
