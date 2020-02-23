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
        // maxWidth: "1200px"
        margin: "3em auto",
        display: "flex",
        justifyContent: "space-evenly"
      }}
    >
      {projects.map(({ node: project }) => (
        <ProjectCard>{project.name}</ProjectCard>
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
