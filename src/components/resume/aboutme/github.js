/** @jsx jsx */
import { jsx } from "theme-ui";
import { AiFillGithub } from "react-icons/ai";

const Github = props => {
  return (
    <div
      sx={{
        color: "text",
        fontFamily: "body",
        fontSize: ["0.9em", "1.1em", "1.2em"],
        fontWeight: 400,
        margin: "1em auto",
        gridArea: "github",
        width: "100%",
        display: "flex",
        alignItems: "center"
      }}
    >
      <AiFillGithub sx={{ marginRight: "0.5em", fontSize: "1.2em" }} />{" "}
      {props.children}
    </div>
  );
};

export default Github;
