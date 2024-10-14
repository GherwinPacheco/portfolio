import {useEffect, useState} from 'react'

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/ui/theme-provider"

export function ModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    
    //returns the saved theme
    return savedTheme ? (savedTheme == 'dark' && true) : false;

  });
  const { setTheme } = useTheme()

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light'
    setTheme(theme)
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <Button className="bg-background text-foreground hover:bg-foreground hover:text-background" size="icon" onClick={() => setIsDark(!isDark)}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
