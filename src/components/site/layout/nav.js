/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { useSiteMetadata } from "./../../useSiteMetadata";

const Nav = () => {
  const { siteName } = useSiteMetadata();
  return (
    <nav
      sx={{
        display: "flex",
        flexDirection: ["column", "row", "row"],
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "100%"
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
          letterSpacing: "text",
          textTransform: "uppercase",
          ":hover": {
            color: "accent"
          }
        }}
        to="/"
      >
        Resume
      </Link> */}
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "1em"],
          color: "text",
          paddingTop: ["1em", null, null],
          letterSpacing: "text",
          textTransform: "uppercase",
          ":hover": {
            color: "accent"
          }
        }}
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
