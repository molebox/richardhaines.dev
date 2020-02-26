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
import H3 from "../components/common/h3";

export default () => {
  const { description, intro } = useSiteMetadata();

  return (
    <Main>
      <Divider />
      <About description={description} intro={intro} />
      <Divider />
      <Projects />
      <H3>
        Im most active on Twitter where you can reach me{" "}
        <ExternalLink href="https://twitter.com/studio_hungry">
          @studio_hungry
        </ExternalLink>
        , if you would prefer to contact me via email you can do so at{" "}
        <ExternalLink href="mailto:hello@richardhaines.dev">
          hello@richardhaines.dev
        </ExternalLink>
      </H3>
    </Main>
  );
};
