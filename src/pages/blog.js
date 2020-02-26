/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/site/layout/main";
import { graphql } from "gatsby";
import { useSearchBar } from "./../components/site/blog/useSearchBar";
import H1 from "./../components/common/h1";
import P from "./../components/common/p";
import SearchBar from "./../components/site/blog/SearchBar";
import Divider from "./../components/common/divider";
import BlogIndex from "../components/site/blog/blog-index";
import AnimatedH1 from "./../components/common/animated-h1";

const smiley = "\u{1F60A}";

const Blog = ({ data }) => {
  const { posts, handleSearchQuery } = useSearchBar(data);
  const blog = Array.from("Blog");
  return (
    <Main>
      <Divider />
      <AnimatedH1 string={blog} />
      <P>
        I recently started making an effort to write down any problems i have
        encountered and how i solved them with the goal to actually start
        writing a blog. Maybe someone else will stumble upon this while
        searching for a solution to their problem. If you have found your way
        here, hi! I hope the post helps you {smiley}{" "}
      </P>
      <Divider />
      <SearchBar handleSearchQuery={handleSearchQuery} />
      <BlogIndex posts={posts} />
    </Main>
  );
};

export default Blog;

export const query = graphql`
  query BlogIndexQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          title
          date(formatString: "DD MMM YYYY")
          category
          author
        }
        fields {
          slug
        }
      }
    }
  }
`;
