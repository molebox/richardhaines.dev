/** @jsx jsx */
import { jsx } from "theme-ui";
import { useSiteMetadata } from "./../../useSiteMetadata";
import H1 from "./../../common/h1";
import H2 from "./../../common/h2";

const About = props => {
  const { siteName } = useSiteMetadata();
  return (
    <section
      sx={{
        maxWidth: "1200px",
        backgroundColor: "background",
        color: "text",
        fontFamily: "body"
      }}
    >
      <H1>{siteName}</H1>
      <H2>{props.children}</H2>
    </section>
  );
};

export default About;
