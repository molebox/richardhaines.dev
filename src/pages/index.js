/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/site/layout/main";
import About from "./../components/site/home/about";
import TechStack from "./../components/site/home/techstack";
import Projects from "./../components/site/home/projects";
import { useSiteMetadata } from "./../components/useSiteMetadata";
import Divider from "../components/common/divider";
import P from "../components/common/p";
import ExternalLink from "./../components/common/external-link";
import ContactLayout from "./../components/site/contact/contact-layout";
import Form from "./../components/site/contact/form";
import IconContainer from "../components/site/home/icon-container";
import { GatsbyIcon, ReactIcon, JSIcon } from "../components/common/icons";

export default () => {
  const { description, intro } = useSiteMetadata();
  const smiley = "\u{1F60A}";

  return (
    <Main>
      <Divider />
      <About description={description} intro={intro} />
      <Divider />
      <Projects />
      <IconContainer>
        <GatsbyIcon />
        <ReactIcon />
        <JSIcon />
      </IconContainer>
      <Divider />
      <ContactLayout>
        <div
          sx={{
            fontFamily: "body"
          }}
        >
          <P>
            If you would like to get in touch about a project, or if you have
            any questions for me, dont hesitate to send me a message by filling
            out the form. I will aim to get back to you within a couple of days
          </P>
          <P>
            You can also reach me on Twitter where im most active{" "}
            <ExternalLink href="https://twitter.com/studio_hungry">
              @studio_hungry
            </ExternalLink>
            . If you would prefer to contact me via email you can do so at{" "}
            <ExternalLink href="mailto:hello@richardhaines.dev">
              hello@richardhaines.dev
            </ExternalLink>
          </P>
        </div>
        <Form />
      </ContactLayout>
    </Main>
  );
};
