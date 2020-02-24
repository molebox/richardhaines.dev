/** @jsx jsx */
import { jsx } from "theme-ui";
import P from "../../common/p";
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
    <P>Created with Gatsby and MDX</P>
  </footer>
);

export default Footer;
