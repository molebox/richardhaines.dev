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
import Spotify from "../components/site/spotify/spotify";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const { description, intro } = useSiteMetadata();
  const contactTextRef = React.useRef(null);
  const contactFormRef = React.useRef(null);
  const iconRef = React.useRef(null);

  React.useEffect(() => {
    gsap.to("body", { visibility: "visible" });
    console.log(iconRef.current);

    if (contactTextRef.current !== null) {
      gsap.fromTo(
        contactTextRef.current,
        { opacity: 0, y: 100 },
        {
          scrollTrigger: {
            trigger: contactTextRef.current,
            toggleActions: "restart none none none"
          },
          opacity: 1,
          duration: 1.2,
          y: 0,
          delay: 3,
          stagger: {
            amount: 0.5
          }
        }
      );
    }

    if (contactFormRef.current !== null) {
      gsap.fromTo(
        contactFormRef.current,
        { opacity: 0, x: 500 },
        {
          scrollTrigger: {
            trigger: contactFormRef.current,
            toggleActions: "restart none none none"
          },
          opacity: 1,
          duration: 1.2,
          x: 0,
          delay: 3
        }
      );
    }

    if (iconRef.current !== null) {
      gsap.to(iconRef.current, {
        scrollTrigger: {
          trigger: iconRef.current,
          toggleActions: "restart none none none"
        },
        stagger: {
          duration: 3,
          amount: 1,
          from: "end"
        },
        delay: 1.2,
        opacity: 1
      });
    }
  }, []);

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
      <section
        sx={{
          margin: "1em auto",
          display: "grid",
          gridAutoRows: "auto",
          gridTemplateColumns: ["1fr", "1fr 1fr"],
          gap: "1em",
          justifyContent: "space-evenly",
          width: "100%"
        }}
      >
        <RecentPosts />
        <Spotify />
      </section>
      <Divider />
      <Projects />
      <IconContainer>
        <GatsbyIcon iconRef={iconRef} />
        <ReactIcon iconRef={iconRef} />
        <JSIcon iconRef={iconRef} />
        <TypeScriptIcon iconRef={iconRef} />
      </IconContainer>
      <Divider />
      <ContactLayout>
        <div
          sx={{
            fontFamily: "body"
          }}
          ref={contactTextRef}
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
        <Form contactFormRef={contactFormRef} />
      </ContactLayout>
    </Main>
  );
};
