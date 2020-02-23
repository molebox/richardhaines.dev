/** @jsx jsx */
import { jsx } from "theme-ui";

const Header = props => (
  <header
    sx={{
      gridArea: "nav",
      // maxWidth: "1200px",
      padding: "1em",
      backgroundColor: "background",
      color: "text",
      height: "100%",
      padding: "2em"
    }}
  >
    {props.children}
  </header>
);

export default Header;
