/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Main from "../components/site/layout/main";
import About from "./../components/site/home/about";
import Projects from "./../components/site/home/projects";
import { useSiteMetadata } from "./../components/useSiteMetadata";
import Divider from "../components/common/divider";
import P from "../components/common/p";
import ExternalLink from "./../components/common/external-link";
import ContactLayout from "./../components/site/contact/contact-layout";
import Form from "./../components/site/contact/form";
import IconContainer from "../components/site/home/icon-container";
import {
  GatsbyIcon,
  ReactIcon,
  JSIcon,
  TypeScriptIcon
} from "../components/common/icons";
import SEO from "gatsby-theme-seo/src/components/seo";
import Social from "./../components/site/layout/social";
import RecentPosts from "../components/site/blog/recent-posts/recent-posts";
import { useInView } from "react-intersection-observer";

const SEODescription = `
	Hello I'm Richard Haines. I'm a software developer who specializes in JAMstack development.
`;

const SEOKeywords = [
  "Web Developer",
  "JAMstack",
  "JAMstack Development",
  "Headless CMS",
  "React",
  "Gatsby",
  "Expo",
  "Sanity.io"
];

export default () => {
  const { description, intro } = useSiteMetadata();
  const [ref, inView, entry] = useInView({
    rootMargin: "-100px 0px"
  });

  React.useEffect(() => {
    console.log("is in view: ", inView);
  }, [inView]);

  return (
    <Main>
      <SEO
        title="Hello I'm Rich Haines. I'm a software developer who specializes in JAMstack development"
        description={SEODescription}
        keywords={SEOKeywords}
        twitter="studio_hungry"
      />
      <Divider />
      <About description={description} intro={intro} />
      <Divider />
      <RecentPosts />
      <Divider />
      <Projects projectsRef={ref} isInView={inView} />
      <IconContainer>
        <GatsbyIcon />
        <ReactIcon />
        <JSIcon />
        <TypeScriptIcon />
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
            any questions for me, don't hesitate to send me a message by filling
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
        <Social />
        <Form />
      </ContactLayout>
    </Main>
  );
};
