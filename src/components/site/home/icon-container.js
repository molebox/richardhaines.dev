/** @jsx jsx */
import { jsx } from "theme-ui";

const IconContainer = props => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "5em auto"
      }}
    >
      {props.children}
    </div>
  );
};

export default IconContainer;
