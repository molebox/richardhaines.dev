/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const BlogIndex = ({ posts }) => {
  return (
    <section
      sx={{
        display: "grid",
        gridAutoRows: "150px",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "2em",
        margin: "3em auto"
      }}
    >
      {posts.map(({ id, frontmatter, fields }) => (
        <Link
          sx={{
            textDecoration: "none"
          }}
          key={id}
          to={fields.slug}
        >
          <div
            sx={{
              border: "solid 2px",
              borderColor: "accent",
              padding: "1.5em",
              height: "150px",
              ":hover": {
                border: "solid 3px",
                borderColor: "accent"
              }
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
                fontSize: ["0.5em", "0.6em", "0.8em"],
                letterSpacing: "text",
                fontWeight: 400,
                margin: "1em auto"
              }}
            >
              Category: {frontmatter.category}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default BlogIndex;
