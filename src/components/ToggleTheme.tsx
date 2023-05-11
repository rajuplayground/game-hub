import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [enabled, setEnabled] = useState(theme === "dark");

  useEffect(() => {
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setEnabled(true);
    } else {
      document.documentElement.classList.remove("dark");
      setEnabled(false);
    }
  }, [theme]);

  const toggleTheme = (value: boolean) => {
    if (value) {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
    setEnabled(value);
  };

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={enabled}
        onChange={toggleTheme}
        className={`${
          enabled ? "bg-green-400" : "bg-gray-400"
        } relative inline-flex h-6 w-10 items-center rounded-full`}
      >
        <span className="sr-only">Dark Mode</span>
        <span
          className={`${
            enabled ? "translate-x-5" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <span className="text-inherit dark:text-white">Dark Mode</span>
    </div>
  );
};

export default ToggleTheme;
