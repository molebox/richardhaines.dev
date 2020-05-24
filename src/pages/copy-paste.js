/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/site/layout/main";
import Divider from "./../components/common/divider";
import AnimatedH1 from "./../components/common/animated-h1";
import SEO from "gatsby-theme-seo/src/components/seo";
import P from "./../components/common/p";
import CopyPasteSnippets from "../components/site/copy-paste/copy-paste-snippets.mdx";

const CopyPaste = ({ location }) => {
  const copyPaste = Array.from("Copy / Paste");
  const SEODescription = `
	I'm a software developer who specializes in JAMstack development. This is a collection of things i find myself copy pasting from other projects ive done.
    `;

  const SEOKeywords = [
    "Web Developer",
    "JAMstack",
    "JAMstack Development",
    "Headless CMS",
    "React",
    "Gatsby"
  ];

  return (
    <Main>
      <SEO
        title="Digital Garden"
        description={SEODescription}
        keywords={SEOKeywords}
        pathname={location.pathname}
        twitter="studio_hungry"
      />
      <Divider />
      <AnimatedH1 string={copyPaste} />
      <div
        sx={{
          marginBottom: "4em"
        }}
      >
        <P>
          This is a collection of things I find my self copying over from other
          projects I have done. Handy to have it all in one place 📒
        </P>
      </div>
      <Divider />
      <CopyPasteSnippets />
    </Main>
  );
};

export default CopyPaste;
