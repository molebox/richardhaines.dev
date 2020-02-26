/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCard from "./project-card";
import H3 from "../../common/h3";

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
        <H3>Selected Work</H3>
      </div>
      <div
        sx={{
          margin: "2em auto",
          display: "flex",
          flexDirection: ["column", "column", "row"],
          justifyContent: "space-evenly"
        }}
      >
        {projects.map(({ node: project }) => (
          <ProjectCard
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

// image {
//   alt
//   src {
//     childImageSharp {
//       fluid {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
