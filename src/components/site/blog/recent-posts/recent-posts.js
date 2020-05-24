/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import H3 from "../../../common/h3";
import { Brain } from "./../../../common/icons";

const container = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      delay: 0.8
    }
  }
};

const RecentPosts = () => {
  const data = useStaticQuery(query);
  const posts = data.allMdx.edges;

  return (
    <section>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: ["3em", "3em", "5em"]
        }}
      >
        <H3>On my mind recently</H3>
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
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          sx={{
            justifySelf: ["center", "center"]
          }}
        >
          <Brain />
        </motion.div>

        <ul
          sx={{
            justifySelf: ["center", "start"],
            marginTop: "2em"
          }}
        >
          {posts.map(post => (
            <motion.li
              variants={container}
              initial="hidden"
              animate="show"
              sx={{
                marginBottom: "1em"
              }}
              key={post.node.id}
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
                <p>{post.node.frontmatter.title}</p>
              </Link>
            </motion.li>
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
