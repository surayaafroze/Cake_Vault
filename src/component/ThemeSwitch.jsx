"use client";
import {Sun, Moon} from "@gravity-ui/icons";
import {Switch} from "@heroui/react";


import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
     <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({isSelected}) => (
        <>
          <Switch.Control
            className={`h-[31px] w-[51px] bg-[#ff66a3] ${isSelected ? "bg-[#ff66a3] shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
          >
            <Switch.Thumb
              className={`size-[27px] bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Sun className="size-4 text-[#ff66a3]" />
                ) : (
                  <Moon className="size-4 text-[#ff66a3]" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
    </div>
  );
};

export default ThemeSwitch;



