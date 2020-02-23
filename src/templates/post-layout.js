/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PostTitle from "../components/site/blog/post-title";
import PostAuthor from "../components/site/blog/post-author";
import PostCategory from "../components/site/blog/post-category";
import PostDate from "../components/site/blog/post-date";
import PostNavigation from "./../components/site/blog/post-navigation";
import EditPost from "./../components/site/blog/edit-post";

const PostLayout = ({ data, pageContext }) => {
  const {
    frontmatter,
    body,
    fields: { editLink }
  } = data.mdx;
  const { title, date, category, author } = frontmatter;
  const { previous, next } = pageContext;

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <PostAuthor>{author}</PostAuthor>
      <PostCategory>{category}</PostCategory>
      <PostDate>{date}</PostDate>
      <EditPost editLink={editLink}>Edit this post on GitHub.</EditPost>
      <MDXRenderer sx={{ height: "100vh" }}>{body}</MDXRenderer>
      {previous === false ? null : (
        <>
          {previous && (
            <PostNavigation destination={previous.fields.slug}>
              {previous.frontmatter.title}
            </PostNavigation>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <PostNavigation destination={next.fields.slug}>
              {next.frontmatter.title}
            </PostNavigation>
          )}
        </>
      )}
    </>
  );
};

export default PostLayout;

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
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
