/** @jsx jsx */
import { jsx } from "theme-ui";
import { GoLocation } from "react-icons/go";

const Location = props => {
  return (
    <div
      sx={{
        color: "text",
        fontFamily: "body",
        fontSize: ["0.9em", "1.1em", "1.2em"],
        fontWeight: 400,
        margin: "1em auto",
        gridArea: "location",
        width: "100%",
        display: "flex",
        alignItems: "center"
      }}
    >
      <GoLocation sx={{ marginRight: "0.5em" }} /> {props.children}
    </div>
  );
};

export default Location;
