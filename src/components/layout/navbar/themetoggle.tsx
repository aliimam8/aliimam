'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from 'src/components/ui/button';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun
        className="h-5 w-5 rotate-0 scale-100 text-slate-600 transition-all hover:text-black dark:-rotate-90 dark:scale-0 dark:text-slate-400 hover:dark:text-white"
        aria-hidden="true"
      />
      <Moon
        className="absolute h-5 w-5 rotate-90 scale-0 text-slate-600 transition-all hover:text-black dark:rotate-0 dark:scale-100 dark:text-slate-400 hover:dark:text-white"
        aria-hidden="true"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
