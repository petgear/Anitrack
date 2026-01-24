"use client"
import { Switch } from "@mui/material";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  },[isDark]);

  return (
    <Switch
        checked={isDark}
        onChange={handleToggle}
    />
  );
}