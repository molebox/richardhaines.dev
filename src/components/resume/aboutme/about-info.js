/** @jsx jsx */
import { jsx } from "theme-ui";

const AboutInfo = props => {
  return (
    <div
      sx={{
        color: "text",
        fontFamily: "body",
        fontSize: ["0.9em", "1.1em", "1.2em"],
        fontWeight: 400,
        margin: "1em auto",
        gridArea: "about",
        width: "100%"
      }}
    >
      {props.children}
    </div>
  );
};

export default AboutInfo;
