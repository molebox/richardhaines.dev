/** @jsx jsx */
import { jsx } from "theme-ui";

const ProjectCard = props => (
  <div
    sx={{
      border: "1px solid",
      borderColor: "accent",
      padding: "2em",
      backgroundColor: "background",
      color: "text",
      fontFamily: "body"
    }}
  >
    {props.children}
  </div>
);

export default ProjectCard;
