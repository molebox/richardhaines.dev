/** @jsx jsx */
import { jsx } from "theme-ui";
// import { motion } from "framer-motion";

// const variants = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 }
// };

const H2 = props => {
  return (
    <h2
      // initial="hidden"
      // animate="visible"
      // variants={variants}
      // transition={{ ease: "easeIn", duration: 4 }}
      sx={{
        color: "text",
        fontFamily: "body",
        fontSize: ["1em", "1.7em", "2em"],
        letterSpacing: "text",
        fontWeight: 400,
        margin: "1em auto"
      }}
    >
      {props.children}
    </h2>
  );
};

export default H2;
