/** @jsx jsx */
import { jsx } from "theme-ui";
import Project from "./project";

const MyProjects = ({ projects }) => {
  console.log({ projects });
  return (
    <section
      sx={{
        border: "1px solid",
        borderColor: "accent",
        padding: "2em",
        backgroundColor: "background",
        color: "text",
        fontFamily: "body",
        display: "grid",
        gridTemplateRows: "repeat(5, 1fr)",
        gap: "2em",
        position: "relative",
        ":before": {
          content: '"Projects"',
          fontFamily: "heading",
          color: "text",
          top: 0,
          left: 0,
          zIndex: 100,
          position: "absolute",
          width: "6em",
          height: "2em",
          backgroundColor: "accent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      }}
    >
      {projects.map((node, index) => (
        <Project
          key={node.name + index}
          name={node.name}
          summary={node.summary}
          stack={node.stack}
          github={node.github}
          npm={node.npm}
          live={node.live}
        />
      ))}
    </section>
  );
};

export default MyProjects;
