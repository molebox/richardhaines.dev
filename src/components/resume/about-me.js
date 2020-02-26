/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  PhoneAboutMeTemplateAreas,
  TabletAboutMeTemplateAreas,
  DesktopAboutMeTemplateAreas
} from "./../../window/breakpoints";
import Name from "./aboutme/name";
import Role from "./aboutme/role";
import Email from "./aboutme/email";
import Site from "./aboutme/site";
import Github from "./aboutme/github";
import Phone from "./aboutme/phone";
import AboutInfo from "./aboutme/about-info";
import H2 from "./../common/h2";
import H3 from "./../common/h3";
import Location from "./aboutme/location";

const AboutMe = () => {
  return (
    <section
      sx={{
        border: "1px solid",
        borderColor: "accent",
        padding: "2em",
        backgroundColor: "background",
        color: "text",
        fontFamily: "body",
        display: "grid",
        gridTemplateRows: "auto",
        gridTemplateAreas: [
          PhoneAboutMeTemplateAreas,
          TabletAboutMeTemplateAreas,
          DesktopAboutMeTemplateAreas
        ],
        gridTemplateColumns: [
          "repeat(4, 1fr)",
          "repeat(6, 1fr)",
          "repeat(8, 1fr)"
        ],
        gap: "1em"
      }}
    >
      <Name>
        <H2>Richard Haines</H2>
      </Name>
      <Role>
        <H3>Software Developer</H3>
      </Role>
      <Email>hello@richardhaines.dev</Email>
      <Site>richardhaines.dev</Site>
      <Github>github.com/molebox/</Github>
      <Phone>+46 730647544</Phone>
      <AboutInfo>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </AboutInfo>
      <Location>Örnskoldsvik, Sweden</Location>
    </section>
  );
};

export default AboutMe;
