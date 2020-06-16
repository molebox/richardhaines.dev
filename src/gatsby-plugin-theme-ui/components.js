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
        fontWeight: "bold",
        margin: "2em auto"
      }}
      {...props}
    >
      {props.children}
    </h2>
  ),
  h3: props => (
    <h3
      sx={{
        fontFamily: "heading",
        fontWeight: "body",
        margin: "1em auto"
      }}
      {...props}
    >
      {props.children}
    </h3>
  ),
  h4: props => (
    <h4
      sx={{
        fontFamily: "heading",
        fontWeight: "body",
        margin: "1em auto"
      }}
      {...props}
    >
      {props.children}
    </h4>
  ),
  p: props => (
    <p
      sx={{
        fontFamily: "heading",
        fontWeight: "body",
        margin: "2em auto"
      }}
      {...props}
    >
      {props.children}
    </p>
  ),
  a: props => (
    <a
      sx={{
        fontFamily: "heading",
        fontWeight: "body",
        color: "text",
        ":hover": {
          color: "accent"
        }
      }}
      {...props}
    >
      {props.children}
    </a>
  ),
  ul: props => (
    <ul
      sx={{
        fontFamily: "heading",
        fontWeight: "body",
        margin: "0 2em"
      }}
      {...props}
    >
      {props.children}
    </ul>
  ),
  li: props => (
    <li
      sx={{
        fontFamily: "heading",
        fontWeight: "body",
        margin: "0.5em auto"
      }}
      {...props}
    >
      {props.children}
    </li>
  )
};
