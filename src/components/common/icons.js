/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import Gatsby from "../../assets/gatsby.svg";
import ReactJs from "../../assets/react-icon.svg";
import Sanity from "../../assets/sanity_logo_red.svg";
import JS from "../../assets/javascript.svg";
import Twitter from "../../assets/twitter.svg";
import Github from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";
import TypeScript from "../../assets/typescript.svg";

export const TypeScriptIcon = () => (
  <TypeScript
    sx={{
      width: ["3em", "5em", "5em"],
      height: ["3em", "5em", "5em"],
      fill: "#007ACC"
    }}
  />
);

export const TwitterIcon = () => (
  <Twitter
    sx={{
      width: "1.5em",
      height: "1.5em",
      fill: "accent",
      marginBottom: "1em",
      ":hover": {
        fill: "#1DA1F2"
      }
    }}
  />
);

export const GithubIcon = () => {
  const [colorMode] = useColorMode();
  return (
    <Github
      sx={{
        width: "1.5em",
        height: "1.5em",
        fill: "accent",
        marginBottom: "1em",
        ":hover": {
          fill: colorMode === "light" ? "#ffffff" : "#000000"
        }
      }}
    />
  );
};

export const LinkedInIcon = () => (
  <LinkedIn
    sx={{
      width: "1.5em",
      height: "1.5em",
      fill: "accent",
      marginBottom: ["1em"],
      ":hover": {
        fill: "#0077B5"
      }
    }}
  />
);

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
