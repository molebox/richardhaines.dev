/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const BlogIndex = ({ posts }) => {
  return (
    <section
      sx={{
        display: "grid",
        gridAutoRows: "auto",
        gridTemplateColumns: "repeat(auto-fill, minmax(auto, 650px))",
        gap: "1.5em",
        margin: "2em auto",
        width: "100%",
        placeContent: "center"
      }}
    >
      {posts.map(({ id, frontmatter, fields, excerpt }) => (
        <Link
          sx={{
            textDecoration: "none"
          }}
          key={id}
          to={fields.slug}
        >
          <motion.div
            whileHover={{ rotate: -1 }}
            transition={{
              duration: 0.2,
              ease: "easeOut"
            }}
            sx={{
              border: "solid 1px",
              borderColor: "accent",
              borderRadius: "5px",
              padding: "1.5em",
              height: "auto",
              minHeight: "350px",
              display: "grid",
              gridTemplateRows: "1fr 2fr",
              justifyContent: "space-evenly",
              backgroundColor: "secondaryDarker",
              ":before": frontmatter.pin
                ? {
                    content: "'Pinned'",
                    width: "6em",
                    backgroundColor: "accent",
                    color: "background",
                    textTransform: "uppercase",
                    fontFamily: "heading",
                    fontWeight: "700",
                    letterSpacing: "body",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px"
                  }
                : null
            }}
          >
            <p
              sx={{
                color: "text",
                fontFamily: "body",
                fontSize: ["0.8em", "1.1em", "1em"],
                letterSpacing: "text",
                fontWeight: 400,
                margin: "1em auto"
              }}
            >
              {frontmatter.title}
            </p>
            <p
              sx={{
                color: "text",
                fontFamily: "body",
                fontSize: ["0.8em", "1.1em", "1em"],
                letterSpacing: "text",
                fontWeight: 400,
                margin: "1em auto"
              }}
            >
              {excerpt}
            </p>
            <div
              sx={{
                display: "flex"
              }}
            >
              <p
                sx={{
                  color: "text",
                  fontFamily: "body",
                  fontSize: ["0.5em", "0.6em", "0.8em"],
                  letterSpacing: "text",
                  fontWeight: 400,
                  margin: "1em auto",
                  alignSelf: "flex-end"
                }}
              >
                Category: {frontmatter.category}
              </p>
              <p
                sx={{
                  color: "text",
                  fontFamily: "body",
                  fontSize: ["0.5em", "0.6em", "0.8em"],
                  letterSpacing: "text",
                  fontWeight: 400,
                  margin: "1em auto",
                  alignSelf: "flex-end"
                }}
              >
                {frontmatter.date}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
    </section>
  );
};

export default BlogIndex;
