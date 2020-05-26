/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import Slugger from "github-slugger";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import H3 from "../../common/h3";

const slugger = new Slugger();
export default ({ headings }) => (
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
      backgroundColor: "secondaryDarker"
    }}
  >
    <H3>Where's it at...?</H3>
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
              to={`/copy-paste/#${slugger.slug(heading.value)}`}
              title={heading.value}
              stripHash
            >
              {heading.value}
            </AnchorLink>
          </li>
        ))}
    </ul>
  </div>
);
