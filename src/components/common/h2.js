/** @jsx jsx */
import { jsx } from "theme-ui";

const H2 = props => {
  return (
    <h2
      sx={{
        color: "text",
        fontFamily: "heading",
        fontSize: ["1em", "1.2em", "1.4em"],
        fontWeight: "body",
        margin: "1em auto"
      }}
    >
      {props.children}
    </h2>
  );
};

export default H2;
