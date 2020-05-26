/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import H3 from "../../../common/h3";
import { Brain } from "./../../../common/icons";
import gsap from "gsap";

const RecentPosts = () => {
  const data = useStaticQuery(query);
  const posts = data.allMdx.edges;

  React.useEffect(() => {
    gsap.fromTo(
      ".recent-posts",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 4,
        stagger: {
          amount: 0.3
        }
      }
    );
  }, []);

  return (
    <section>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: ["3em", "3em", "5em"]
        }}
        className="recent-posts"
      >
        <h3
          sx={{
            color: "text",
            fontFamily: "heading",
            fontWeight: "heading",
            fontSize: ["0.9em", "1em", "1.2em"],
            margin: "1em auto",
            textTransform: "uppercase",
            letterSpacing: "text"
          }}
        >
          On my mind recently
        </h3>
      </div>

      <section
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr 1fr"],
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          marginBottom: "3em"
        }}
      >
        <div className="recent-posts">
          <Brain />
        </div>

        <ul
          sx={{
            justifySelf: ["center", "start"],
            marginTop: "2em"
          }}
        >
          {posts.map(post => (
            <li
              sx={{
                marginBottom: "1em"
              }}
              key={post.node.id}
              className="recent-posts"
            >
              <Link
                sx={{
                  color: "text",
                  fontFamily: "heading",
                  fontWeight: "body",
                  fontSize: ["0.9em", "1.1em", "1.2em"],
                  textDecoration: "none",
                  ":hover": {
                    color: "accent"
                  }
                }}
                to={post.node.fields.slug}
              >
                <span className="recent-posts">
                  {post.node.frontmatter.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default RecentPosts;

export const query = graphql`
  query RecentPostsQuery {
    allMdx(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          id
          fields {
            slug
          }
        }
      }
    }
  }
`;
