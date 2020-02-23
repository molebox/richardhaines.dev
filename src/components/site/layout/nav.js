/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav
      sx={{
        display: "flex",
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
        to="/resume"
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
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
