/** @jsx jsx */
import { jsx } from "theme-ui";
import GatsbyImage from "gatsby-image";

const ProjectImage = props => (
  <GatsbyImage
    sx={{
      border: "1px solid",
      borderColor: "accent",
      padding: "2em",
      width: "350px"
    }}
    fluid={props.fluid}
    alt={props.alt}
  />
);

export default ProjectImage;
