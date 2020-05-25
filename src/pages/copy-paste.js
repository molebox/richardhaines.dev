/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Main from "../components/site/layout/main";
import Divider from "./../components/common/divider";
import AnimatedH1 from "./../components/common/animated-h1";
import SEO from "gatsby-theme-seo/src/components/seo";
import P from "./../components/common/p";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import ScrollToTop from "./../components/common/scroll-to-top";

const CopyPaste = ({
  data: {
    file: { childMdx }
  },
  location
}) => {
  const copyPaste = Array.from("Copy / Paste");
  const SEODescription = `
	I'm a software developer who specializes in JAMstack development. This is a collection of things i find myself copy pasting from other projects ive done.
    `;

  const SEOKeywords = ["Jamstack", "React", "Gatsby"];

  const ogImage = `https://vigilant-jones-f0730c.netlify.app/opengraph?title=${copyPaste}&tags=${SEOKeywords}&author=@studio_hungry`;

  return (
    <>
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
          id="toTop"
        >
          <P>
            This is a collection of things I find my self copying over from
            other projects I have done. Handy to have it all in one place 📒
          </P>
        </div>
        <Divider />
        <MDXRenderer headings={childMdx.headings}>{childMdx.body}</MDXRenderer>
      </Main>
      <ScrollToTop />
    </>
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
      }
    }
  }
`;
