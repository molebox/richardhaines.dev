/** @jsx jsx */
import { jsx } from "theme-ui";

const P = props => {
  return (
    <p
      sx={{
        color: "text",
        fontFamily: "heading",
        fontWeight: "body",
        fontSize: ["0.9em", "1.1em", "1.2em"],
        margin: "1em auto"
      }}
    >
      {props.children}
    </p>
  );
};

export default P;
