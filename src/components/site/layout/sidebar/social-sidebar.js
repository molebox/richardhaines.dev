/** @jsx jsx */
import { jsx } from "theme-ui";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "../../../common/icons";
import Darkmode from "./../../darkmode";

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
      <a href="https://twitter.com/studio_hungry" name="twitter link">
        <TwitterIcon />
      </a>
      <a href="https://github.com/molebox" name="github link">
        <GithubIcon />
      </a>
      <a href="https://www.linkedin.com/in/richard-haines-578464176/" name="linkedin link">
        <LinkedInIcon />
      </a>
      <Darkmode />
    </div>
  );
};

export default SocialSideBar;
