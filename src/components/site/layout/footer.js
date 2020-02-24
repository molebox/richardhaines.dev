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
        fontFamily: "body",
        fontSize: ["0.7em", "0.8em", "1em"],
        letterSpacing: "text",
        fontWeight: 400,
        margin: "1em auto"
      }}
    >
      Created with Gatsby and MDX
    </p>
  </footer>
);

export default Footer;
