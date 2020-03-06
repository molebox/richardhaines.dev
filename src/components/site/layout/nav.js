/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { useSiteMetadata } from "./../../useSiteMetadata";
import Darkmode from "../darkmode";

const Nav = () => {
  const { siteName } = useSiteMetadata();
  return (
    <nav
      sx={{
        display: "flex",
        justifyContent: ["center", "space-evenly", "space-evenly"],
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "relative"
      }}
    >
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "1em"],
          color: "text",
          paddingTop: ["1em", null, null],
          letterSpacing: "text",
          ":hover": {
            color: "accent"
          }
        }}
        to="/"
      >
        {siteName}
      </Link>
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "1em"],
          color: "text",
          paddingTop: ["1em", null, null],
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          ":hover": {
            color: "accent"
          }
        }}
        to="/blog"
      >
        Blog
      </Link>
      {/* <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "1em"],
          color: "text",
          paddingTop: ["1em", null, null],
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          ":hover": {
            color: "accent"
          }
        }}
        to="/resume"
      >
        Resume
      </Link> */}
      {/* <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "1em"],
          color: "text",
          paddingTop: ["1em", null, null],
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          ":hover": {
            color: "accent"
          }
        }}
        to="/contact"
      >
        Contact
      </Link> */}
      <Darkmode />
    </nav>
  );
};

export default Nav;
