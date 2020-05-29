/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Slugger from "github-slugger";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const slugger = new Slugger();
export default ({ headings, slug }) => {
  return (
    <div
      sx={{
        border: "1px solid",
        borderColor: "accent",
        borderRadius: "5px",
        padding: "2em",
        fontFamily: "heading",
        fontWeight: "heading",
        color: "#fff",
        margin: "2em",
        backgroundColor: "secondaryDarker",
        position: [null, "sticky"],
        top: "33%",
        display: ["none", "block"]
      }}
    >
      <h3
        sx={{
          color: "text",
          fontFamily: "heading",
          fontWeight: "heading",
          fontSize: ["0.9em", "1em", "1.2em"],
          margin: "1em auto",
          textTransform: "uppercase",
          letterSpacing: "text"
        }}
      >
        take me there
      </h3>
      <ul>
        {headings
          .filter(heading => heading.depth !== 1)
          .map(heading => (
            <li key={heading.value}>
              <AnchorLink
                sx={{
                  textDecoration: "none",
                  fontFamily: "body",
                  color: "text",
                  ":hover": {
                    color: "accent"
                  }
                }}
                to={`${slug}#${slugger.slug(heading.value)}`}
                title={heading.value}
              >
                {heading.value}
              </AnchorLink>
            </li>
          ))}
      </ul>
    </div>
  );
};
