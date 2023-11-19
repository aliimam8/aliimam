"use client"

import { Moon, Sun } from 'lucide-react';
import { useTheme } from "next-themes";

import { Button } from "src/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun
        className="h-5 w-5 text-slate-600 hover:text-black hover:dark:text-white dark:text-slate-400 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <Moon
        className="absolute text-slate-600 hover:text-black hover:dark:text-white dark:text-slate-400 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}