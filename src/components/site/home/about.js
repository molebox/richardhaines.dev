/** @jsx jsx */
import { jsx } from "theme-ui";
import H1 from "./../../common/h1";
import H2 from "./../../common/h2";

const About = props => {
  return (
    <section
      sx={{
        maxWidth: "1200px",
        backgroundColor: "background",
        color: "text",
        fontFamily: "body"
      }}
    >
      <H1>Hello, I'm Rich Haines</H1>
      <H2>{props.intro}</H2>
      <H2>{props.description}</H2>
    </section>
  );
};

export default About;
