/** @jsx jsx */
import { jsx } from "theme-ui";
import { AiOutlineMail } from "react-icons/ai";

const Email = props => {
  return (
    <div
      sx={{
        color: "text",
        fontFamily: "body",
        fontSize: ["0.9em", "1.1em", "1.2em"],
        fontWeight: 400,
        margin: "1em auto",
        gridArea: "email",
        width: "100%",
        display: "flex",
        alignItems: "center"
      }}
    >
      <AiOutlineMail sx={{ marginRight: "0.5em" }} /> {props.children}
    </div>
  );
};

export default Email;
