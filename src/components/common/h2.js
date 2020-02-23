/** @jsx jsx */
import { jsx } from "theme-ui";
import { breakpoints } from "./../../window/breakpoints";
import useBreakpoints from "./../../window/index";

const H2 = props => {
  let { xs, sm } = useBreakpoints(breakpoints);
  const mobile = "1.7em";
  const desktop = "2.2em";
  const fontSize = () => {
    if (xs || sm) {
      return mobile;
    } else {
      return desktop;
    }
  };
  return (
    <h2
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
    </h2>
  );
};

export default H2;
