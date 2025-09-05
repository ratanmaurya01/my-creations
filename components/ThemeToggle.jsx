"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // prevent hydration mismatch

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-full border border-gray-200 
        dark:border-gray-700 px-1.5 py-1.5 text-sm hover:shadow-soft"
      aria-label="Toggle Theme"
      title="Toggle Theme"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
