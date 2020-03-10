/** @jsx jsx */
import { jsx } from "theme-ui";
// import { motion } from "framer-motion";

// const variants = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 }
// };

const H1 = props => {
  return (
    <h1
      // initial="hidden"
      // animate="visible"
      // variants={variants}
      // transition={{ ease: "easeIn", duration: 3 }}
      sx={{
        color: "text",
        fontFamily: "body",
        fontSize: ["1.7em", "2.5em", "3em"],
        fontWeight: 400,
        margin: "0 auto"
      }}
    >
      {props.children}
    </h1>
  );
};

export default H1;
