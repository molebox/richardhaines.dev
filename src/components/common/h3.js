/** @jsx jsx */
import { jsx } from "theme-ui";
// import { motion } from "framer-motion";

// const variants = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 }
// };

const H3 = props => {
  return (
    <h3
      // initial="hidden"
      // animate="visible"
      // variants={variants}
      // transition={{ ease: "easeIn", duration: 4 }}
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
      {props.children}
    </h3>
  );
};

export default H3;
