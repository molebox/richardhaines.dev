/** @jsx jsx */
import { jsx } from "theme-ui";
import H2 from "./../../common/h2";
import AnimatedH1 from "../../common/animated-h1";

const About = props => {
  const hello = Array.from("Hello, I'm Rich Haines");
  return (
    <section
      sx={{
        maxWidth: "1200px",
        backgroundColor: "background",
        color: "text",
        fontFamily: "body"
      }}
    >
      <AnimatedH1 string={hello} />
      <H2>{props.intro}</H2>
      <H2>{props.description}</H2>
    </section>
  );
};

export default About;
