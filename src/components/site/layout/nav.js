/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { useSiteMetadata } from "./../../useSiteMetadata";
// import Darkmode from "../darkmode";

const Nav = () => {
  const { siteName } = useSiteMetadata();
  return (
    <nav
      sx={{
        display: "flex",
        justifyContent: ["center", "space-between", "space-around"],
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
          fontSize: ["0.8em", "0.9em", "0.9em"],
          color: "text",
          paddingTop: ["1em", null, null],
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          // marginRight: [0, "10vw", "5vw"],
          ":hover": {
            color: "accent"
          }
        }}
        to="/blog"
      >
        Blog
      </Link>
      <a
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "0.9em"],
          color: "text",
          paddingTop: ["1em", null, null],
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          // marginRight: [0, "10vw", "5vw"],
          ":hover": {
            color: "accent"
          }
        }}
        href="https://richardhainesresume.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      {/* <Darkmode /> */}
    </nav>
  );
};

export default Nav;
