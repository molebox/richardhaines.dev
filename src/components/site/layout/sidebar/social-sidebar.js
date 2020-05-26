/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "../../../common/icons";
// import Darkmode from "./../../darkmode";
import gsap from "gsap";

const SocialSideBar = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".social-links",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        delay: 4.3,
        stagger: {
          amount: 1,
          from: "edges"
        }
      }
    );
  }, []);
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
      <a href="https://twitter.com/studio_hungry" className="social-links">
        <TwitterIcon />
      </a>
      <a href="https://github.com/molebox" className="social-links">
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/richard-haines-578464176/"
        className="social-links"
      >
        <LinkedInIcon />
      </a>
      {/* <Darkmode className="social-links" /> */}
    </div>
  );
};

export default SocialSideBar;
