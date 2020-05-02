/** @jsx jsx */
import { jsx } from "theme-ui";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "../../common/icons";

const Social = () => {
  return (
    <div
      sx={{
        display: ["flex", "none", "none"],
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
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

export default Social;
