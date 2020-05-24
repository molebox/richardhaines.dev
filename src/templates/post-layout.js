/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PostNavigation from "./../components/site/blog/post-navigation";
import EditPost from "./../components/site/blog/edit-post";
import Main from "./../components/site/layout/main";
import H1 from "./../components/common/h1";
import PostAuthor from "./../components/site/blog/post-author";
import PostDate from "./../components/site/blog/post-date";
import SEO from "gatsby-theme-seo/src/components/seo";
import Twitter from "../components/site/home/twitter";
import styled from "@emotion/styled";

const Toc = styled.ul`
  position: fixed;
  left: calc(50% + 400px);
  top: 110px;
  max-height: 70vh;
  width: 310px;
  display: flex;
`;
const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`;

const PostLayout = ({ data, pageContext, location }) => {
  const {
    frontmatter,
    body,
    excerpt,
    tableOfContents,
    fields: { editLink }
  } = data.mdx;
  const { title, date, author, keywords } = frontmatter;
  const { previous, next } = pageContext;

  console.log({ tableOfContents });

  const ogImage = `https://vigilant-jones-f0730c.netlify.app/opengraph?title=${title}&tags=${keywords}&author=@studio_hungry`;

  return (
    <Main>
      <SEO
        title={title}
        description={excerpt}
        keywords={keywords}
        pathname={location.pathname}
        twitter="studio_hungry"
        ogImage={ogImage}
      />
      <section>
        <H1>{title}</H1>
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "row", "row"],
            justifyContent: ["space-between", "space-between", "space-evenly"],
            margin: "2em auto"
          }}
        >
          <PostAuthor>Author: {author}</PostAuthor>
          <PostDate> Posted: {date}</PostDate>
          <Twitter />
        </div>
        {typeof tableOfContents.items === "undefined" ? null : (
          <Toc>
            <InnerScroll>
              <h2>Table of contents</h2>
              {tableOfContents.items.map(i => (
                <li key={i.url}>
                  <a href={i.url} key={i.url}>
                    {i.title}
                  </a>
                </li>
              ))}
            </InnerScroll>
          </Toc>
        )}
        <MDXRenderer sx={{ height: "100vh" }}>{body}</MDXRenderer>
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "row", "row"],
            justifyContent: "space-around",
            margin: "2em auto"
          }}
        >
          <EditPost editLink={editLink}>Edit on GitHub.</EditPost>
          {previous === false ? null : (
            <>
              {previous && (
                <PostNavigation destination={previous.fields.slug}>
                  Previous: {previous.frontmatter.title}
                </PostNavigation>
              )}
            </>
          )}
          {next === false ? null : (
            <>
              {next && (
                <PostNavigation destination={next.fields.slug}>
                  Next: {next.frontmatter.title}
                </PostNavigation>
              )}
            </>
          )}
        </div>
      </section>
    </Main>
  );
};

export default PostLayout;

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        category
        author
        keywords
      }
      body
      excerpt
      headings {
        depth
        value
      }
      tableOfContents
      fields {
        slug
        editLink
      }
    }
  }
`;
