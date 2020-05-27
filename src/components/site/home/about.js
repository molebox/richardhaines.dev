/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import H2 from "./../../common/h2";
import gsap from "gsap";
import PageTitle from "../../common/page-title";

const About = props => {
  React.useEffect(() => {
    gsap.fromTo(
      ".home-h2",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 1.2,
        y: 0,
        delay: 2.5,
        stagger: {
          amount: 0.5
        }
      }
    );
  }, []);

  return (
    <section
      sx={{
        maxWidth: "1200px",
        backgroundColor: "background",
        color: "text",
        fontFamily: "body"
      }}
    >
      <PageTitle title="Hello, I'm Rich Haines" />
      <div
        sx={{
          marginBottom: "4em"
        }}
      >
        <H2 className="home-h2">{props.intro}</H2>
        <H2 className="home-h2">{props.description}</H2>
      </div>
    </section>
  );
};

export default About;
