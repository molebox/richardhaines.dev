/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const H1 = props => {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: "easeIn", duration: 3 }}
      sx={{
        color: "text",
        fontFamily: "body",
        fontSize: ["1.7em", "2.5em", "5em"],
        letterSpacing: "text",
        fontWeight: 400,
        margin: "1em auto"
      }}
    >
      {props.children}
    </motion.h1>
  );
};

export default H1;
