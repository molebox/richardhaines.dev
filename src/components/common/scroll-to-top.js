/** @jsx jsx */
import { jsx } from "theme-ui";
import { RocketIcon } from "./icons";
import scrollTo from "gatsby-plugin-smoothscroll";

const ScrollToTop = () => (
  <div
    sx={{
      cursor: "pointer",
      position: "sticky",
      top: "33%",
      right: "0",
      display: ["none", "flex"],
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}
    onClick={() => scrollTo("#toTop")}
  >
    <RocketIcon />
    <span sx={{ fontFamily: "heading", textTransform: "uppercase" }}>
      Take me up!
    </span>
  </div>
);

export default ScrollToTop;
