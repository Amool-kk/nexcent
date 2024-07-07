"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="dark:bg-[#263238] text-primary-green lg:mx-2 p-2 rounded-md cursor-pointer">
      {theme === "dark" && <FiSun onClick={() => setTheme("light")} />}
      {theme === "light" && <FiMoon onClick={() => setTheme("dark")} />}
    </div>
  );
};

export default ThemeSwitcher;
