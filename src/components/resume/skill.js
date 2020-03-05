/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const Skill = ({ name, keywords }) => {
  return (
    <div
      sx={{
        position: "relative"
      }}
    >
      <p
        sx={{
          fontFamily: "heading",
          fontSize: ["1em", "1.2em", "1.3em"],
          margin: "1em auto",
          ":after": {
            content: '""',
            display: "block",
            width: "95%",
            paddingTop: "0.2em",
            borderBottom: "2px solid",
            borderColor: "white",
            transition: "0.5s",
            position: "absolute",
            zIndex: 1000
          }
        }}
      >
        {name}
      </p>
      <>
        {keywords.map((skill, index) => (
          <p
            key={index + skill}
            sx={{
              margin: "0.5em auto"
            }}
          >
            {skill}
          </p>
        ))}
      </>
    </div>
  );
};

export default Skill;
