/** @jsx jsx */
import { jsx } from "theme-ui";
import Skill from "./skill";

const Skills = ({ skills }) => {
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
        gridTemplateColumns: "repeat(5, 1fr)",
        position: "relative",
        ":before": {
          content: '"Skills"',
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
      {skills.map((skill, index) => (
        <Skill
          key={skill + index}
          name={skill.name}
          keywords={skill.keywords}
        />
      ))}
    </section>
  );
};

export default Skills;
