/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Link } from "gatsby";
import gsap from "gsap";

const BlogIndex = ({ posts }) => {
  React.useEffect(() => {
    gsap.from(".card", {
      duration: 1.7,
      scale: 0,
      y: 40,
      ease: "power2.easeOut",
      delay: 2.5,
      stagger: {
        grid: "auto",
        from: "start",
        amount: 2,
        ease: "power2.easeOut"
      }
    });
  }, []);

  const handleMouseEnter = e =>
    gsap.to(e.target, { scale: 1.01, duration: 0.3 });

  const handleMouseLeave = e =>
    gsap.to(e.target, { scale: 1, duration: 0.4, ease: "back(10)" });

  return (
    <section
      sx={{
        display: "grid",
        gridAutoRows: "auto",
        gridTemplateColumns: "repeat(auto-fill, minmax(auto, 650px))",
        gap: "1.5em",
        margin: "4em auto",
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
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
                    fontWeight: "bold",
                    letterSpacing: "body",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px"
                  }
                : null
            }}
            className="card"
          >
            <p
              sx={{
                color: "#ffffff",
                fontFamily: "heading",
                fontWeight: "body",
                fontSize: ["0.8em", "1.1em", "1em"],
                letterSpacing: "text",
                margin: "1em auto"
              }}
            >
              {frontmatter.title}
            </p>
            <p
              sx={{
                color: "#ffffff",
                fontFamily: "heading",
                fontWeight: "body",
                fontSize: ["0.8em", "1.1em", "1em"],
                letterSpacing: "text",
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
                  color: "#ffffff",
                  fontFamily: "heading",
                  fontWeight: "body",
                  fontSize: ["0.5em", "0.6em", "0.8em"],
                  letterSpacing: "text",
                  margin: "1em auto",
                  alignSelf: "flex-end"
                }}
              >
                Category: {frontmatter.category}
              </p>
              <p
                sx={{
                  color: "#ffffff",
                  fontFamily: "heading",
                  fontWeight: "body",
                  fontSize: ["0.5em", "0.6em", "0.8em"],
                  letterSpacing: "text",
                  margin: "1em auto",
                  alignSelf: "flex-end"
                }}
              >
                {frontmatter.date}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default BlogIndex;
