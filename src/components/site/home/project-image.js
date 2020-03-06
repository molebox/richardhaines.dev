/** @jsx jsx */
import { jsx } from "theme-ui";
import GatsbyImage from "gatsby-image";

const ProjectImage = props => (
  <GatsbyImage
    sx={{
      border: "2px solid",
      borderColor: "primary",
      padding: "2em",
      width: ["250px", "300px", "350px"]
    }}
    fluid={props.fluid}
    alt={props.alt}
  />
);

export default ProjectImage;
