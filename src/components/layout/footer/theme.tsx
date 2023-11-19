"use client";

import { useTheme } from "next-themes";
import { Icons } from "src/components/icons";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const Footer = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  // eslint-disable-next-line no-unused-vars
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="flex m-10 justify-center gap-5">
      <div className="p-1 rounded-full border-aired dark:border-aired border">
        
          <button
            onClick={() => setTheme("light")}
            className="p-2 mr-3 dark:bg-black text-white dark:text-slate-400 bg-aired rounded-full"
          >
            <Icons.sun size={20}/>
            <span className="sr-only">T</span>
          </button>
       
          <button type="button" onClick={handleScrollTop}>
            <Icons.arrowUp size={20}/>
            <span className="sr-only">T</span>
          </button>
       
          <button
            onClick={() => setTheme("dark")}
            className="p-2 ml-3 dark:bg-aired text-slate-600 dark:text-white rounded-full"
          >
            <Icons.moon size={20}/>
            <span className="sr-only">T</span>
          </button>
       
      </div>
    </div>
  );
};

export default Footer;
