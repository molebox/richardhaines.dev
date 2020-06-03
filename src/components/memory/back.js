/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import gsap from "gsap";
import GatsbyImage from "gatsby-image";

const Back = ({ pairMatch, selectedAsPair, backImage }) => {
  // React.useEffect(() => {
  //   gsap.to(".back", {rotateY: 180, duration: 1})
  // }, []);

  // React.useEffect(() => {
  //   gsap.to(".back", {rotateY: 180, duration: 1})
  // }, [selectedAsPair]);

  return (
    <div
      sx={{
        width: 150,
        height: 150
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
