/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import gsap from "gsap";
import GatsbyImage from "gatsby-image";

const Back = ({ pairMatch, backImage }) => {
  React.useEffect(() => {}, []);

  return (
    <div
      sx={{
        width: 150,
        height: 150,
        pointerEvents: pairMatch ? "none" : "auto"
      }}
    >
      <GatsbyImage
        sx={{
          width: "100%",
          height: "100%"
        }}
        fluid={backImage}
      />
    </div>
  );
};

export default Back;
