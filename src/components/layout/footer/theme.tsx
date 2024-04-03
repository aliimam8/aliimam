'use client';

import { useTheme } from 'next-themes';
import { Icons } from 'src/components/icons';

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

const Footer = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  // eslint-disable-next-line no-unused-vars
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className="flex justify-center">
      <div className="rounded-full border border-slate-100 dark:border-slate-900 p-1">
        <button
          onClick={() => setTheme('light')}
          className="mr-3 rounded-full bg-aired p-2 text-white dark:bg-black dark:text-slate-400"
        >
          <Icons.sun size={20} strokeWidth={1.8} />
          <span className="sr-only">T</span>
        </button>

        <button type="button" onClick={handleScrollTop}>
          <Icons.arrowUp size={20} strokeWidth={1.5}/>
          <span className="sr-only">T</span>
        </button>

        <button
          onClick={() => setTheme('dark')}
          className="ml-3 rounded-full p-2 text-slate-600 dark:bg-aired dark:text-white"
        >
          <Icons.moon size={20} strokeWidth={1.5} />
          <span className="sr-only">T</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
