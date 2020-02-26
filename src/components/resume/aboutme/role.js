/** @jsx jsx */
import { jsx } from "theme-ui";

const Role = props => {
  return (
    <div
      sx={{
        color: "text",
        fontFamily: "body",
        fontSize: ["0.9em", "1.1em", "1.2em"],
        fontWeight: 400,
        margin: "auto",
        gridArea: "role",
        width: "100%"
      }}
    >
      {props.children}
    </div>
  );
};

export default Role;
