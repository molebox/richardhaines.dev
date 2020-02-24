/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/site/layout/main";
import About from "./../components/site/home/about";
import TechStack from "./../components/site/home/techstack";
import Projects from "./../components/site/home/projects";
import { useSiteMetadata } from "./../components/useSiteMetadata";
import Divider from "../components/common/divider";

const Contact = () => {
  const { description } = useSiteMetadata();

  return (
    <Main>
      <Divider />
      <About>{description}</About>
      <Divider />
      <TechStack />
      <Projects />
    </Main>
  );
};

export default Contact;
