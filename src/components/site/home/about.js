/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import H2 from "./../../common/h2";
import AnimatedH1 from "../../common/animated-h1";
import { useWindupString } from "windups";
import gsap from "gsap";

const About = props => {
  // const hello = Array.from("Hello, I'm Rich Haines");
  const [hello] = useWindupString("Hello, I'm Rich Haines", {
    pace: char => (char === " " ? 60 : 100)
  });

  React.useEffect(() => {
    gsap.fromTo(
      ".home-h2",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 1.2,
        y: 0,
        delay: 2.1,
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
      <h1
        sx={{
          color: "text",
          fontFamily: "Jost",
          fontSize: ["1.7em", "2.5em", "3.8em"],
          fontWeight: "body",
          marginTop: "1em",
          display: "flex",
          justifyContent: "flex-start"
        }}
      >
        {hello}
      </h1>
      {/* <AnimatedH1 string={hello} /> */}
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
