/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCard from "./project-card";
import H3 from "../../common/h3";
import { motion } from "framer-motion";

const container = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      delayChildren: 1,
      // staggerChildren: 0.1,
      staggerDirection: 1
    }
  }
};

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
          display: "grid",
          gridAutoRows: "auto",
          gridTemplateColumns: "repeat(auto-fill, minmax(auto, 450px))",
          gap: "1.5em",
          justifyContent: "space-evenly",
          width: "100%"
        }}
      >
        {projects.map(({ node: project, index }) => (
          <motion.div variants={container} initial="hidden" animate="show">
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
          </motion.div>
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
