/** @jsx jsx */
import { jsx } from "theme-ui";
import useBreakpoints from "./../../window/index";
import { breakpoints } from "./../../window/breakpoints";

const H1 = props => {
  let { xs, sm } = useBreakpoints(breakpoints);
  const mobile = "2em";
  const desktop = "5em";
  const fontSize = () => {
    if (xs || sm) {
      return mobile;
    } else {
      return desktop;
    }
  };
  return (
    <h1
      sx={{
        color: "text",
        fontFamily: "body",
        fontSize: fontSize,
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
