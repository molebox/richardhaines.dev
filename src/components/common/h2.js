/** @jsx jsx */
import { jsx } from "theme-ui";

const H2 = props => {
  return (
    <h2
      sx={{
        color: "text",
        fontFamily: "body",
        fontSize: ["1.2em", "1.7em", "2.2em"],
        letterSpacing: "text",
        fontWeight: 400,
        margin: "1em auto"
      }}
    >
      {props.children}
    </h2>
  );
};

export default H2;
