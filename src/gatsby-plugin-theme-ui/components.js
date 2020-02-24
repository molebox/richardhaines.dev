/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export default {
  h1: props => (
    <h1 {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </h1>
  ),
  h2: props => (
    <h2
      sx={{
        fontFamily: "heading",
        fontWeight: "400",
        margin: "2em auto"
      }}
      {...props}
    >
      {props.children}
    </h2>
  ),
  p: props => (
    <p
      sx={{
        fontFamily: "body",
        fontWeight: "400",
        margin: "2em auto"
      }}
      {...props}
    >
      {props.children}
    </p>
  )
};
