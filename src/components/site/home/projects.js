/** @jsx jsx */
import { jsx } from "theme-ui";

import { graphql, useStaticQuery } from "gatsby";
import ProjectCard from "./project-card";

const Projects = () => {
  const data = useStaticQuery(query);
  const projects = data.allProjectsJson.edges;

  return (
    <section
      sx={{
        marginTop: ["3em", "3em", "5em"]
      }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
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
          Some Work
        </h3>
      </div>
      <div
        sx={{
          margin: "2em auto",
          display: "grid",
          gridAutoRows: "auto",
          gridTemplateColumns: "repeat(auto-fill, minmax(auto, 450px))",
          gap: "1.5em",
          justifyContent: "space-evenly",
          width: "100%"
        }}
      >
        {projects.map(({ node: project, index }) => (
          <ProjectCard
            key={project.name + index}
            name={project.name}
            description={project.description}
            fluid={project.image.src.childImageSharp.fluid}
            alt={project.image.alt}
            website={project.website}
            github={project.github}
            npm={project.npm}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          name
          description
          github
          website
          npm
          image {
            alt
            src {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
