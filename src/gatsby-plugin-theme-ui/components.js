import React from "react";

export default {
  h1: props => (
    <h1 {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </h1>
  )
};
