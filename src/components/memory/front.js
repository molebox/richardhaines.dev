/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import gsap from "gsap";
import { CorgiIcon } from "./../common/icons";

const Front = ({ selectedAsPair }) => {
  React.useEffect(() => {}, []);

  return (
    <div
      sx={{
        pointerEvents: selectedAsPair ? "none" : "auto"
      }}
    >
      <CorgiIcon />
    </div>
  );
};

export default Front;
