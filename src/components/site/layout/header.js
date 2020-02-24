/** @jsx jsx */
import { jsx } from "theme-ui";

const Header = props => (
  <header
    sx={{
      gridArea: "nav",
      padding: "1em",
      backgroundColor: "background",
      color: "text",
      height: "100%",
      padding: [null, "2em", "2em"],
      paddingTop: ["2em", null, null]
    }}
  >
    {props.children}
  </header>
);

export default Header;
