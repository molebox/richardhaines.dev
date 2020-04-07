/** @jsx jsx */
import { jsx } from "theme-ui";
import ProjectImage from "./project-image";
import { motion } from "framer-motion";

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
};

const ProjectCard = props => {
  return (
    <motion.div
      variants={item}
      sx={{
        border: "1px solid",
        borderColor: "accent",
        borderRadius: "5px",
        padding: "2em",
        backgroundColor: "secondaryDarker",
        color: "text",
        fontFamily: "body",
        display: "grid",
        gridTemplateRows: "200px 100px 100px",
        gap: "0.2em",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1em",
        height: "auto",
        position: "relative"
      }}
    >
      <ProjectImage fluid={props.fluid} alt={props.alt} />
      <p
        sx={{
          margin: "2em auto",
          color: "#ffffff",
          fontFamily: "heading",
          fontWeight: "body"
        }}
      >
        {props.name}
      </p>
      <p
        sx={{
          color: "#ffffff",
          fontWeight: "body",
          fontFamily: "heading",
          alignSelf: "flex-start"
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
            fontFamily: "heading",
            fontWeight: "body",
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
            fontFamily: "heading",
            fontWeight: "body",
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
              fontFamily: "heading",
              fontWeight: "body",
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
    </motion.div>
  );
};

export default ProjectCard;
