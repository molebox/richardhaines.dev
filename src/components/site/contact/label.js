/** @jsx jsx */
import { jsx } from "theme-ui";

const Label = ({ children }) => (
  <label
    sx={{
      fontFamily: "body",
      display: "flex",
      flexDirection: "column",
      marginBottom: "1em"
    }}
  >
    {children}
  </label>
);

export default Label;
