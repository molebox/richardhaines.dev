/** @jsx jsx */
import { jsx } from "theme-ui";
import Gatsby from "../../assets/gatsby.svg";
import ReactJs from "../../assets/react-icon.svg";
import Sanity from "../../assets/sanity_logo_red.svg";
import JS from "../../assets/javascript.svg";

export const JSIcon = () => (
  <JS
    sx={{
      width: ["3em", "5em", "5em"],
      height: ["3em", "5em", "5em"],
      fill: "#ffff00"
    }}
  />
);

export const GatsbyIcon = () => (
  <Gatsby
    sx={{
      width: ["3em", "5em", "5em"],
      height: ["3em", "5em", "5em"],
      fill: "#362066"
    }}
  />
);

export const ReactIcon = () => (
  <ReactJs
    sx={{
      width: ["3em", "5em", "5em"],
      height: ["3em", "5em", "5em"]
    }}
  />
);

export const SanityIcon = () => (
  <Sanity
    sx={{
      width: "3em",
      height: "3em"
    }}
  />
);

export default { SanityIcon, ReactIcon, GatsbyIcon, JSIcon };
