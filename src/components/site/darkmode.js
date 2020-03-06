/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import React from "react";

const Darkmode = () => {
  const [colorMode, setColorMode] = useColorMode("dark");

  return (
    <button
      role="switch"
      id="theme-toggle"
      aria-checked={colorMode === "light" ? "false" : "true"}
      className={colorMode !== "light" ? "active" : ""}
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      sx={{
        backgroundColor: "primary",
        border: "1px solid",
        borderColor: "accent",
        borderRadius: "25px",
        position: "absolute",
        right: "5vw",
        top: 3,
        height: "20px",
        width: "40px",
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
          left: "22px"
        }
      }}
    >
      <span className="visually-hidden">
        {colorMode === "light" ? "Dark" : "Light"}
      </span>
    </button>
    // <div sx={{
    //     cursor: 'pointer',
    //     height: '1.8em',
    //     width: '4em',
    //     position: 'relative',
    //     perspective: 600,
    //     transform: colorMode === 'dark' ? 'transform: rotateY(180deg)' : null,
    // }}
    // onClick={toggelColor}
    // >
    //     <div sx={{
    //         height: '100%',
    //         position: 'absolute',
    //         transformStyle: 'preserve-3d',
    //         transition: 'transform 1s',
    //         width: '100%',
    //     }}
    //     >
    //     <div sx={{
    //         backfaceVisibility: 'hidden',
    //         height: '100%',
    //         position: 'absolute',
    //         overflow: 'hidden',
    //         width: '100%',
    //         fontFamily: 'heading',
    //         backgroundColor: 'accent',
    //         color: 'primary',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center'
    //     }}>
    //         DARK
    //     </div>
    //     <div sx={{
    //         fontFamily: 'heading',
    //         backgroundColor: 'accent',
    //         color: 'primary',
    //         transform: 'rotateY(180deg)'
    //     }}>
    //         LIGHT
    //     </div>
    //     </div>
    // </div>
  );
};

export default Darkmode;
