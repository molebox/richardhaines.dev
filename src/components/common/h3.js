/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

// const variants = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 }
// };

const H3 = props => {
  return (
    <motion.h3
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.5
      }}
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
    </motion.h3>
  );
};

export default H3;
