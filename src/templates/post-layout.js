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

const PostLayout = ({ data, pageContext }) => {
  const {
    frontmatter,
    body,
    fields: { editLink }
  } = data.mdx;
  const { title, date, category, author } = frontmatter;
  const { previous, next } = pageContext;

  return (
    <Main>
      <section sx={{}}>
        <H1>{title}</H1>
        <MDXRenderer sx={{ height: "100vh" }}>{body}</MDXRenderer>
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "row", "row"],
            justifyContent: "space-around",
            margin: "2em auto"
          }}
        >
          <PostAuthor>Author: {author}</PostAuthor>
          <PostDate> Posted: {date}</PostDate>
          <EditPost editLink={editLink}>Edit this post on GitHub.</EditPost>
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
      }
      body
      excerpt
      fields {
        slug
        editLink
      }
    }
  }
`;
