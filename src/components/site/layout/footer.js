/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "./../../common/divider";

const Footer = () => (
  <footer
    sx={{
      gridArea: "footer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      // maxWidth: "1200px",
      backgroundColor: "background",
      color: "text"
    }}
  >
    <Divider />
    <p
      sx={{
        color: "text",
        fontFamily: "heading",
        fontWeight: "body",
        fontSize: ["0.7em", "0.8em", "1em"],
        letterSpacing: "text",
        margin: "1em auto"
      }}
    >
      Created with{" "}
      <a
        sx={{
          color: "#fff",
          ":hover": {
            color: "accent"
          }
        }}
        href="https://www.gatsbyjs.org/"
      >
        Gatsby
      </a>
      ,{" "}
      <a
        sx={{
          color: "#fff",
          ":hover": {
            color: "accent"
          }
        }}
        href="https://mdxjs.com/"
      >
        MDX
      </a>{" "}
      and{" "}
      <a
        sx={{
          color: "#fff",
          ":hover": {
            color: "accent"
          }
        }}
        href="https://theme-ui.com/"
      >
        Theme-ui
      </a>
    </p>
  </footer>
);

export default Footer;
