/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const IconContainer = ({ children }) => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "5em auto"
      }}
      className="icon"
    >
      {children}
    </div>
  );
};

export default IconContainer;
