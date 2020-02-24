/** @jsx jsx */
import { jsx } from "theme-ui";
import ProjectImage from "./project-image";

const ProjectCard = props => (
  <div
    sx={{
      border: "1px solid",
      borderColor: "accent",
      padding: "2em",
      backgroundColor: "background",
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
        margin: "2em auto"
      }}
    >
      {props.name}
    </p>
    <p>{props.description}</p>
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
          color: "text",
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
          color: "text",
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
            color: "text",
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

export default ProjectCard;
