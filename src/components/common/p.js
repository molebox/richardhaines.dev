/** @jsx jsx */
import { jsx } from "theme-ui";
import useBreakpoints from "./../../window/index";
import { breakpoints } from "./../../window/breakpoints";

const P = props => {
  let { xs, sm } = useBreakpoints(breakpoints);
  const mobile = "1em";
  const desktop = "1.3em";
  const fontSize = () => {
    if (xs || sm) {
      return mobile;
    } else {
      return desktop;
    }
  };
  return (
    <p
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
    </p>
  );
};

export default P;
