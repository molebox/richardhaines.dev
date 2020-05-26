/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import gsap from "gsap";

const Divider = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".divider",
      { opacity: 0, x: -100 },
      { x: 0, opacity: 1, duration: 2.5, delay: 1.5 }
    );
  }, []);

  return (
    <div
      // animate={{
      //   width: ["20%", "40%", "60%", "80%", "100%"]
      // }}
      // style={{ originY: 0.5 }}
      // transition={{ duration: 1.5 }}'
      sx={{
        border: "solid 1px",
        color: "accent",
        width: "100%"
      }}
      className="divider"
    />
  );
};

export default Divider;
