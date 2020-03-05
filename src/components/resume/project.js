/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const Project = props => {
  return (
    <div
      sx={{
        borderBottom: "1px solid",
        borderColor: "accent",
        display: "grid",
        gridTemplateColumns: "minmax(300px, 1fr) minmax(300px, 1fr)",
        gridAutoRows: "min-content"
      }}
    >
      <p
        sx={{
          fontFamily: "heading",
          fontSize: ["1em", "1.2em", "1.3em"],
          margin: "1em",
          display: "flex",
          justifyContent: "start"
        }}
      >
        {props.name}
      </p>
      <p
        sx={{
          margin: "1em",
          gridColumn: 1,
          gridRow: 2,
          height: "100%"
        }}
      >
        {props.summary}
      </p>
      <div
        sx={{
          display: "flex",
          justifyContent: "start",
          margin: "1em",
          width: "100%"
        }}
      >
        {props.stack.map(stack => (
          <div
            sx={{
              backgroundColor: "accent",
              color: "text",
              width: "7em",
              height: "2em",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "0.5em"
            }}
          >
            {stack}
          </div>
        ))}
      </div>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "2em",
          width: "100%"
        }}
      >
        {props.npm ? (
          <a
            sx={{
              fontSize: ["0.8em", "1em", "1em"],
              color: "text",
              ":hover": {
                color: "accent"
              }
            }}
            href={props.npm}
          >
            <strong>NPM: </strong> {props.npm}
          </a>
        ) : null}
        {props.github ? (
          <a
            sx={{
              fontSize: ["0.8em", "1em", "1em"],
              color: "text",
              ":hover": {
                color: "accent"
              }
            }}
            href={props.github}
          >
            <strong>Github: </strong> {props.github}
          </a>
        ) : null}
        {props.live ? (
          <a
            sx={{
              fontSize: ["0.8em", "1em", "1em"],
              color: "text",
              ":hover": {
                color: "accent"
              }
            }}
            href={props.live}
          >
            <strong>Site: </strong> {props.live}
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
