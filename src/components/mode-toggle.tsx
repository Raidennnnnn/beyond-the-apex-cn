import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/useTheme"
import { useEffect } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'm') {
        setTheme(theme === "light" ? "dark" : "light")
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [theme, setTheme])

  return (
    <Button
      variant="outline"
      size="sm"
      className="absolute top-0 right-0 m-2 transition-all w-8 md:w-auto px-1"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    > 
      <Sun className="absolute md:left-2 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute md:left-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <div className="hidden md:flex ml-6 px-2 py-0.5 items-center gap-0.5 border-border rounded-sm bg-muted ">
        <span className="text-lg leading-none">⌘</span>
        <span className="text-xs">M</span>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
