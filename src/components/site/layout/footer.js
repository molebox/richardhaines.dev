/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = () => (
  <footer
    sx={{
      gridArea: "footer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "1200px",
      backgroundColor: "background",
      color: "text"
    }}
  >
    this is the footer
  </footer>
);

export default Footer;
