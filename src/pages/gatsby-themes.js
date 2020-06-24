/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Main from "../components/site/layout/main";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "gatsby-theme-seo/src/components/seo";
import Divider from "./../components/common/divider";
import P from "../components/common/p";
import gsap from "gsap";
import PageTitle from "./../components/common/page-title";

const GatsbyThemes = ({ location }) => {
  const data = useStaticQuery(query);
  const themes = data.allGatsbyThemesJson.edges;

  React.useEffect(() => {
    gsap.to("body", { visibility: "visible" });
  }, []);

  React.useEffect(() => {
    gsap.fromTo(
      ".themes-p",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 1.2,
        y: 0,
        delay: 1.8,
        stagger: {
          amount: 0.5
        }
      }
    );

    gsap.from(".theme", {
      duration: 1.7,
      scale: 0,
      y: 40,
      ease: "power2.easeOut",
      delay: 2,
      stagger: {
        grid: "auto",
        from: "start",
        amount: 2,
        ease: "power2.easeOut"
      }
    });
  }, []);

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
      <PageTitle title="Gatsby Themes" />
      <div
        sx={{
          marginBottom: "4em"
        }}
      >
        <P className="themes-p">This a collection of gatsby themes i have created.</P>
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
              display: "grid",
              gridTemplateRows: "70px 100px 150px",
              gap: "0.2em",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "1em",
              height: "auto",
              position: "relative"
            }}
            className="theme"
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
                fontWeight: "body",
                alignSelf: "flex-start"
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
              {node.website ? (
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
              ) : null}

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
