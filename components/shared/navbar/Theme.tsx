"use client";

import React from "react";
import { useTheme } from "@/context/ThemeProvider";
// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarSeparator,
//   MenubarShortcut,
//   MenubarTrigger,
// } from "@/components/ui/menubar";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const Theme = () => {
  const { mode, setMode } = useTheme();
  console.log(mode);

  const handleClick = () => {
    if (mode === "dark") {
      setMode("light");
      localStorage.theme = "light";
    } else {
      setMode("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <Button
      className="background-light100_dark900 border-none shadow-none rounded-[6px] w-8 h-8 p-0"
      onClick={handleClick}
    >
      {mode === "dark" ? (
        <FaSun className="text-light400_dark600 text-xl" />
      ) : (
        <FaMoon className="text-light400_dark600 text-xl" />
      )}
    </Button>
  );
};

export default Theme;
