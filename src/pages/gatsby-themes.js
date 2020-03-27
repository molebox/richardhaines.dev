/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/site/layout/main";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "gatsby-theme-seo/src/components/seo";
import Divider from "./../components/common/divider";
import AnimatedH1 from "./../components/common/animated-h1";
import P from "../components/common/p";

const GatsbyThemes = ({ location }) => {
  const data = useStaticQuery(query);
  const themes = data.allGatsbyThemesJson.edges;

  const gatsbyThemes = Array.from("Gatsby Themes");
  const SEODescription = `
      I'm a software developer who specializes in JAMstack development. This is a collection of gatsby themes i have created.
  `;

  const SEOKeywords = [
    "Web Developer",
    "JAMstack",
    "JAMstack Development",
    "Headless CMS",
    "React",
    "Gatsby",
    "Gatsby Themes"
  ];
  console.log({ themes });
  return (
    <Main>
      <SEO
        title="Gatsby Themes"
        description={SEODescription}
        keywords={SEOKeywords}
        pathname={location.pathname}
        twitter="studio_hungry"
      />
      <Divider />
      <AnimatedH1 string={gatsbyThemes} />
      <div
        sx={{
          marginBottom: "4em"
        }}
      >
        <P>This a collection of gatsby themes i have created.</P>
      </div>
      <Divider />
      <section
        sx={{
          display: "grid",
          gridAutoRows: "auto",
          gridTemplateColumns: "repeat(auto-fill, minmax(auto, 550px))",
          gap: "1.5em",
          margin: "2em auto",
          width: "100%",
          placeContent: "center"
        }}
      >
        {themes.map(({ node, index }) => (
          <div
            key={node.name + index}
            sx={{
              border: "1px solid",
              borderColor: "accent",
              borderRadius: "5px",
              padding: "0 2em 0 2em",
              backgroundColor: "secondaryDarker",
              color: "text",
              fontFamily: "heading",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "1em",
              height: "auto",
              position: "relative"
            }}
          >
            <p
              sx={{
                margin: "2em auto",
                color: "#ffffff",
                fontFamily: "heading",
                fontWeight: "body"
              }}
            >
              {node.name}
            </p>

            <p
              sx={{
                margin: "2em auto",
                color: "#ffffff",
                fontFamily: "heading",
                fontWeight: "body"
              }}
            >
              {node.description}
            </p>

            <div
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
                margin: "2em auto"
              }}
            >
              <a
                sx={{
                  fontSize: ["0.8em", "1em", "1em"],
                  color: "#ffffff",
                  fontFamily: "heading",
                  fontWeight: "body",
                  ":hover": {
                    color: "accent"
                  }
                }}
                href={node.website}
              >
                View Site
              </a>

              <a
                sx={{
                  fontSize: ["0.8em", "1em", "1em"],
                  color: "#ffffff",
                  fontFamily: "heading",
                  fontWeight: "body",
                  ":hover": {
                    color: "accent"
                  }
                }}
                href={node.github}
              >
                View Github
              </a>

              {node.npm ? (
                <a
                  sx={{
                    fontSize: ["0.8em", "1em", "1em"],
                    color: "#ffffff",
                    fontFamily: "heading",
                    fontWeight: "body",
                    ":hover": {
                      color: "accent"
                    }
                  }}
                  href={node.npm}
                >
                  View NPM
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </section>
    </Main>
  );
};

export default GatsbyThemes;

export const query = graphql`
  {
    allGatsbyThemesJson {
      edges {
        node {
          name
          description
          github
          website
          npm
        }
      }
    }
  }
`;
