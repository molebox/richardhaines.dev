/** @jsx jsx */
import { jsx } from "theme-ui";

const IconContainer = ({ children }) => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "5em auto"
      }}
    >
      {children}
    </div>
  );
};

export default IconContainer;
