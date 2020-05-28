/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Main from "../components/site/layout/main";
import Divider from "./../components/common/divider";
import SEO from "gatsby-theme-seo/src/components/seo";
import P from "./../components/common/p";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import gsap from "gsap";
import PageTitle from "./../components/common/page-title";

const CopyPaste = ({
  data: {
    file: { childMdx }
  },
  location
}) => {
  React.useEffect(() => {
    gsap.to("body", { visibility: "visible" });
  }, []);

  React.useEffect(() => {
    gsap.fromTo(
      ".copy-p",
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

    gsap.fromTo(
      ".content",
      { opacity: 0 },
      { opacity: 1, delay: 1.9, duration: 1 }
    );
  }, []);

  const SEODescription = `
	I'm a software developer who specializes in JAMstack development. This is a collection of things i find myself copy pasting from other projects ive done.
    `;

  const SEOKeywords = ["Jamstack", "React", "Gatsby"];

  const title = `Copy / Paste`;

  const ogImage = `https://vigilant-jones-f0730c.netlify.app/opengraph?title=${title}&tags=${SEOKeywords}&author=@studio_hungry`;


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
        <PageTitle title="Copy / Paste" />
        <div
          sx={{
            marginBottom: "4em"
          }}
          id="toTop"
        >
          <P className="copy-p">
            This is a collection of things I find my self copying over from
            other projects I have done. Handy to have it all in one place 📒
          </P>
        </div>
        <Divider />
        <MDXRenderer
          className="content"
          headings={childMdx.headings}
          slug="/copy-paste/"
          sx={{ height: "100vh" }}
        >
          {childMdx.body}
        </MDXRenderer>
      </Main>
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
