/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import P from "../../common/p";

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
            <P>{frontmatter.title}</P>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default BlogIndex;
