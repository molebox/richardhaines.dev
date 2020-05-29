/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "./../../common/divider";

const Footer = () => (
  <section
    sx={{
      minHeight: 150,
      gridArea: "footer"
    }}
  >
    <Divider />
    <footer
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "background",
        color: "text",
        minHeight: 150
      }}
    >
      <p
        sx={{
          color: "text",
          fontFamily: "heading",
          fontWeight: "body",
          fontSize: ["0.5em", "0.8em", "1em"],
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
  </section>
);

export default Footer;
