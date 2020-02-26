/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/site/layout/main";
import Divider from "../components/common/divider";
import AnimatedH1 from "../components/common/animated-h1";
import ResumeLayout from "../components/resume/resume-layout";
import AboutMe from "../components/resume/about-me";
import Skills from "../components/resume/skills";
import Work from "../components/resume/work";
import Education from "../components/resume/education";
import Languages from "../components/resume/languages";
import Interests from "../components/resume/interests";
import MyProjects from "../components/resume/my-projects";

const Resume = () => {
  const resume = Array.from("Resume");
  return (
    <Main>
      <Divider />
      <AnimatedH1 string={resume} />
      <Divider />
      <ResumeLayout>
        <AboutMe>About me</AboutMe>
        <Skills>Skills</Skills>
        <MyProjects>My Projects</MyProjects>
        <Work>Work</Work>
        <Education>Education</Education>
        <Languages>Languages</Languages>
        <Interests>Interests</Interests>
      </ResumeLayout>
    </Main>
  );
};

export default Resume;
