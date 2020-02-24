/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav
      sx={{
        display: "flex",
        flexDirection: ["column", "row", "row"],
        justifyContent: ["space-around", "space-evenly", "space-evenly"],
        alignItems: "center",
        width: "100%",
        height: "auto"
      }}
    >
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          color: "text",
          letterSpacing: "text",
          textTransform: "uppercase",
          ":hover": {
            color: "accent"
          }
        }}
        to="/"
      >
        Home
      </Link>
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          color: "text",
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
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
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
      </Link>
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          color: "text",
          letterSpacing: "text",
          textTransform: "uppercase",
          ":hover": {
            color: "accent"
          }
        }}
        to="/"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
