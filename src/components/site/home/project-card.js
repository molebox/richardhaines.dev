/** @jsx jsx */
import { jsx } from "theme-ui";
import ProjectImage from "./project-image";

const ProjectCard = props => {
  return (
    <div
      sx={{
        border: "1px solid",
        borderColor: "accent",
        borderRadius: "5px",
        padding: "2em",
        backgroundColor: "secondaryDarker",
        color: "text",
        fontFamily: "body",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1em",
        height: "auto"
      }}
    >
      <ProjectImage fluid={props.fluid} alt={props.alt} />
      <p
        sx={{
          margin: "2em auto",
          color: "#ffffff"
        }}
      >
        {props.name}
      </p>
      <p
        sx={{
          color: "#ffffff"
        }}
      >
        {props.description}
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
            ":hover": {
              color: "accent"
            }
          }}
          href={props.website}
        >
          View Site
        </a>
        <a
          sx={{
            fontSize: ["0.8em", "1em", "1em"],
            color: "#ffffff",
            ":hover": {
              color: "accent"
            }
          }}
          href={props.github}
        >
          View Github
        </a>
        {props.npm ? (
          <a
            sx={{
              fontSize: ["0.8em", "1em", "1em"],
              color: "#ffffff",
              ":hover": {
                color: "accent"
              }
            }}
            href={props.npm}
          >
            View NPM
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
