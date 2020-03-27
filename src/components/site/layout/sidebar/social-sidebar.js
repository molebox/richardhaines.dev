/** @jsx jsx */
import { jsx } from "theme-ui";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "../../../common/icons";

const SocialSideBar = () => {
  return (
    <div
      sx={{
        width: "25px",
        height: "100%",
        position: "sticky",
        zIndex: 1000,
        top: "33%",
        left: 0,
        display: ["none", "flex", "flex"],
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
      }}
    >
      <a href="https://twitter.com/studio_hungry">
        <TwitterIcon />
      </a>
      <a href="https://github.com/molebox">
        <GithubIcon />
      </a>
      <a href="https://www.linkedin.com/in/richard-haines-578464176/">
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default SocialSideBar;
