/** @jsx jsx */
import { jsx } from "theme-ui";
import GatsbyImage from "gatsby-image";

const ProjectImage = props => (
  <GatsbyImage
    sx={{
      border: "2px solid",
      borderColor: "primary",
      width: ["250px", "300px", "350px"],
      height: "auto"
    }}
    fluid={props.fluid}
    alt={props.alt}
  />
);

export default ProjectImage;
