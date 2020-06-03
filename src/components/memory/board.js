/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Card from "./card";
import gsap from "gsap";

const Board = ({ corgis, flipped, handleClick, disabled, solved }) => {
  return (
    <section
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 155px)",
        gridAutoRows: "auto",
        gap: "1em",
        margin: "2em auto",
        width: "100%",
        height: "auto",
        placeContent: "center"
      }}
      className="corgi-board"
    >
      {corgis &&
        corgis.map(node => {
          return (
            <Card
              name={node.name}
              key={node.id}
              id={node.id}
              backImage={node.backImage.src.childImageSharp.fluid}
              frontImage={node.frontImage.src.childImageSharp.fluid}
              flipped={flipped.includes(node.id)}
              handleClick={handleClick}
              disabled={disabled || solved.includes(node.id)}
              solved={solved.includes(node.id)}
            />
          );
        })}
    </section>
  );
};

export default Board;
