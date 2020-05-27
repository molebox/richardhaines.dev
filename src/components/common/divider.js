/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import gsap from "gsap";

const Divider = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".divider",
      { opacity: 0 },
      { opacity: 1, duration: 3, delay: 1.5 }
    );
  }, []);

  return (
    <div
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
