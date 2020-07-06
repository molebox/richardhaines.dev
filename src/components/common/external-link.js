/** @jsx jsx */
import { jsx } from "theme-ui";

const ExternalLink = ({ children, href }) => (
  <a
    sx={{
      display: "inline-block",
      fontFamily: "body",
      fontWeight: 400,
      color: "text",
      ":hover": {
        color: "accent"
      }
    }}
    href={href}
  >
    {children}
  </a>
);

export default ExternalLink;
