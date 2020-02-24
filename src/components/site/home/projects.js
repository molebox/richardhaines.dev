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
        margin: "3em auto",
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
