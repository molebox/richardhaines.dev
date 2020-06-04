/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "./../../useSiteMetadata";
import gsap from "gsap";

const Nav = () => {
  const { siteName } = useSiteMetadata();

  React.useEffect(() => {
    gsap.fromTo(
      ".nav-link",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        delay: 3,
        stagger: {
          amount: 1,
          from: "random"
        }
      }
    );
  }, []);

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
        className="nav-link"
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
          ":hover": {
            color: "accent"
          }
        }}
        to="/blog"
        className="nav-link"
      >
        Garden
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
        to="/copy-paste"
        className="nav-link"
      >
        Copy/Paste
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
        to="/gatsby-themes"
        className="nav-link"
      >
        Gatsby Themes
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
        className="nav-link"
      >
        Resume
      </a>
    </nav>
  );
};

export default Nav;
