/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/site/layout/main";
import Divider from "./../components/common/divider";
import AnimatedH1 from "./../components/common/animated-h1";
import SEO from "gatsby-theme-seo/src/components/seo";
import P from "./../components/common/p";
import CopyPasteSnippets from "../components/site/copy-paste/copy-paste-snippets.mdx";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const CopyPaste = ({
  data: {
    file: { childMdx }
  },
  location
}) => {
  console.log({ childMdx });
  const copyPaste = Array.from("Copy / Paste");
  const SEODescription = `
	I'm a software developer who specializes in JAMstack development. This is a collection of things i find myself copy pasting from other projects ive done.
    `;

  const SEOKeywords = ["Jamstack", "React", "Gatsby"];

  const ogImage = `https://vigilant-jones-f0730c.netlify.app/opengraph?title=${copyPaste}&tags=${SEOKeywords}&author=@studio_hungry`;

  return (
    <Main>
      <SEO
        title="Copy/Paste"
        description={SEODescription}
        keywords={SEOKeywords}
        pathname={location.pathname}
        twitter="studio_hungry"
        ogImage={ogImage}
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
      <MDXRenderer headings={childMdx.headings}>{childMdx.body}</MDXRenderer>
      {/* <CopyPasteSnippets /> */}
    </Main>
  );
};

export default CopyPaste;

export const query = graphql`
  query CopyPasteQuery {
    file(
      sourceInstanceName: { eq: "copy-paste" }
      name: { eq: "copy-paste-snippets" }
    ) {
      childMdx {
        body
        headings {
          depth
          value
        }
        tableOfContents
      }
    }
  }
`;
