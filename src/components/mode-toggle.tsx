import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/useTheme"
import { useEffect, useRef } from "react"
import { flushSync } from "react-dom"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLButtonElement>(null);


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
      ref={ref}
      variant="outline"
      size="sm"
      className="fixed z-10 top-0 right-0 m-2 transition-all w-8 md:w-auto px-1"
      onClick={toggleTheme}
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

  async function toggleTheme() {
    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTheme(theme === "light" ? "dark" : "light")
      return
    }
    
    const currentTheme = theme;
    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme === "light" ? "dark" : "light")
      })
    }).ready;
    
    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(
      Math.max(left, right),
      Math.max(top, bottom),
    );

    // const clipPath = [`circle(${maxRadius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`]

    const clipPath = currentTheme === "light" 
      ? [`circle(${maxRadius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`]
      : [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`]

    document.documentElement.animate(
      {
        clipPath,
      },
      {
        duration: 500,
        easing: 'ease-in-out' ,
        pseudoElement: currentTheme === "light" ? '::view-transition-old(root)' : '::view-transition-new(root)',
      }
    );
  }
}
