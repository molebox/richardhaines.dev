/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Main from "../components/site/layout/main";
import { graphql } from "gatsby";
import { useSearchBar } from "./../components/site/blog/useSearchBar";
import P from "./../components/common/p";
import SearchBar from "./../components/site/blog/SearchBar";
import Divider from "./../components/common/divider";
import BlogIndex from "../components/site/blog/blog-index";
import AnimatedH1 from "./../components/common/animated-h1";
import SEO from "gatsby-theme-seo/src/components/seo";
import Category from "../components/site/blog/category";
import { useCategory } from "./../components/site/blog/useCategory";
import AllCategory from "../components/site/blog/all-categories";
import gsap from "gsap";
import { useWindupString } from "windups";

const Blog = ({ data, location }) => {
  const { posts, handleSearchQuery } = useSearchBar(data);
  const { categories, handleCategoryQuery } = useCategory(posts);
  const [garden] = useWindupString("Digital Garden", {
    pace: char => (char === " " ? 60 : 100)
  });

  React.useEffect(() => {
    gsap.to("body", { visibility: "visible" });
  }, []);

  React.useEffect(() => {
    gsap.fromTo(
      ".garden-p",
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
      ".categories",
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1,
        delay: 3,
        stagger: {
          grid: "auto",
          from: "edges",
          axis: "x",
          amount: 1
        }
      }
    );
  }, []);

  const categoriesList = [
    ...new Set(posts.map(post => post.frontmatter.category))
  ];
  const pinned = posts.filter(post => post.frontmatter.pin === true);
  const allPosts = pinned.length
    ? [pinned[0], ...posts.filter(post => !post.frontmatter.pin)]
    : posts;

  const blog = Array.from("Digital Garden");
  const SEODescription = `
	I'm a software developer who specializes in JAMstack development. This is my Digital Garden where I write
  about stuff i code, problems i encounter, projects im working on and ideas that come to my mind.
`;

  const SEOKeywords = [
    "Web Developer",
    "JAMstack",
    "JAMstack Development",
    "Headless CMS",
    "React",
    "Gatsby",
    "Expo",
    "Sanity.io"
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
      <h1
        sx={{
          color: "text",
          fontFamily: "Jost",
          fontSize: ["1.7em", "2.5em", "3.8em"],
          fontWeight: "body",
          marginTop: "1em",
          display: "flex",
          justifyContent: "flex-start"
        }}
      >
        {garden}
      </h1>
      <div
        sx={{
          marginBottom: "4em"
        }}
      >
        <P className="garden-p">
          This is my garden, there are many like it, but this one is mine. Its a
          place for me to sow my ideas, some i will grow, some i wont. 🌼
        </P>
      </div>
      <Divider />
      <section
        sx={{
          display: "grid",
          gridAutoRows: "auto",
          gridTemplateColumns: "repeat(auto-fit, minmax(auto, 100px))",
          gap: "1.5em",
          width: "100%",
          placeContent: "center",
          paddingTop: "2em"
        }}
        className="categories"
      >
        <AllCategory handleCategoryQuery={handleCategoryQuery} />
        {categoriesList.map((cat, index) => (
          <Category
            key={cat + index}
            category={cat}
            handleCategoryQuery={handleCategoryQuery}
            className="categories"
          />
        ))}
      </section>
      <BlogIndex posts={categories.length ? categories : allPosts} />
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
        excerpt(pruneLength: 200)
        frontmatter {
          title
          date(formatString: "DD MMM YYYY")
          category
          author
          pin
        }
        fields {
          slug
        }
      }
    }
  }
`;
