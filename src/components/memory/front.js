/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import gsap from "gsap";
import { CorgiIcon } from "./../common/icons";

const Front = ({ selectedAsPair }) => {
  // React.useEffect(() => {
  //   gsap.to(".front", {rotateY: 180, duration: 1})
  // }, []);

  return (
    <div
      // sx={{
      //   pointerEvents: selectedAsPair ? "none" : "auto"
      // }}
      className="front"
    >
      <CorgiIcon />
    </div>
  );
};

export default Front;
