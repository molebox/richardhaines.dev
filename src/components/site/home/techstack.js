/** @jsx jsx */
import { jsx } from "theme-ui";
import P from "../../common/p";
import { useSiteMetadata } from "./../../useSiteMetadata";

const TechStack = () => {
  const { techStack } = useSiteMetadata();
  return (
    <section
      sx={{
        margin: "3em auto"
      }}
    >
      <P>{techStack}</P>
    </section>
  );
};

export default TechStack;
