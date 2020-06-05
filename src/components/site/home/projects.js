/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCard from "./project-card";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const plugin = [gsap.registerPlugin(ScrollTrigger)];

const Projects = () => {
  const data = useStaticQuery(query);
  const projects = data.allProjectsJson.edges;
  // const projectCardRef = React.useRef(null);
  const projectCardRef = React.useRef(null);
  React.useEffect(() => {
    
    // if (projectCardRef.current) {
    //   console.log(projectCardRef.current)
    //   gsap.fromTo(
    //     projectCardRef.current,
    //     { opacity: 0 },
    //     {
    //       scrollTrigger: {
    //         trigger: projectCardRef.current,
    //         toggleActions: "restart none none none"
    //       },
    //       stagger: {
    //         amount: 1,
    //         from: "start"
    //       },
    //       delay: 2,
    //       duration: 2,
    //       opacity: 1
    //     }
    //   );
    // }

      gsap.fromTo(
        '.project-card',
        { opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.project-card',
            toggleActions: "restart none none none"
          },
          stagger: {
            amount: 1,
            from: "start"
          },
          delay: 2,
          duration: 2,
          opacity: 1
        }
      );

  }, []);

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
            // ref={projectCardRef.current}
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
