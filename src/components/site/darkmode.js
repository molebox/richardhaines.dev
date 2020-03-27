/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import React from "react";

const Darkmode = () => {
  const [colorMode, setColorMode] = useColorMode("dark");

  return (
    <button
      role="switch"
      name="dark mode theme toggle"
      id="theme-toggle"
      aria-checked={colorMode === "light" ? "false" : "true"}
      className={colorMode !== "light" ? "active" : ""}
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      sx={{
        display: ["none", "block", "block"],
        backgroundColor: "primary",
        border: "1px solid",
        borderColor: "accent",
        borderRadius: "25px",
        position: "relative",
        right: "0",
        top: 3,
        height: "40px",
        width: "20px",
        ":active,:focus": {
          "&&": { outline: "none" }
        },
        "::after": {
          borderRadius: "50%",
          content: '""',
          display: "block",
          position: "absolute",
          top: "2px",
          left: "2px",
          width: 14,
          height: 14,
          backgroundColor: "secondary"
        },
        "&.active::after": {
          top: "22px"
        }
      }}
    >
      <span hidden className="visually-hidden">
        {colorMode === "light" ? "Dark" : "Light"}
      </span>
    </button>
  );
};

export default Darkmode;
