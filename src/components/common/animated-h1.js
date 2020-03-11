/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

// Add staggering effect to the children of the container
const containerVariants = {
  before: {},
  after: { transition: { staggerChildren: 0.06 } }
};

// Variants for animating each letter
const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 100
    }
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 100
    }
  }
};

const AnimatedH1 = ({ string }) => (
  <motion.div
    center={"y"}
    height={26}
    width={"100%"}
    background={""}
    sx={{
      color: "text",
      fontFamily: "body",
      fontSize: ["1.7em", "2.5em", "4em"],
      fontWeight: 400,
      margin: "1em auto",
      display: "flex",
      justifyContent: "flex-start"
    }}
    variants={containerVariants}
    initial={"before"}
    animate={"after"}
  >
    {string.map((letter, index) => (
      <motion.div
        key={index}
        width={"auto"} // Set the width to the width of the letter
        height={26} // Set the height to the height of the text
        background={""}
        style={{ position: "relative" }} // Position elements
        variants={letterVariants}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.div>
    ))}
  </motion.div>
);

export default AnimatedH1;
