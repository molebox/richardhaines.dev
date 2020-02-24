/** @jsx jsx */
import { jsx } from "theme-ui";

const H1 = props => {
  return (
    <h1
      sx={{
        color: "text",
        fontFamily: "body",
        fontSize: ["1.7em", "2.5em", "5em"],
        letterSpacing: "text",
        fontWeight: 400,
        margin: "1em auto"
      }}
    >
      {props.children}
    </h1>
  );
};

export default H1;
