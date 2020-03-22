/** @jsx jsx */
import { jsx } from "theme-ui";

const AccentBox = props => (
  <div
    sx={{
      border: "2px solid",
      borderColor: "accent",
      borderRadius: "5px",
      padding: "2em",
      fontFamily: "body",
      margin: "0 auto"
    }}
  >
    {props.children}
  </div>
);

export default AccentBox;
