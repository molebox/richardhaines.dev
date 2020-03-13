/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <motion.div
      // animate={{
      //   width: ["20%", "40%", "60%", "80%", "100%"]
      // }}
      // style={{ originY: 0.5 }}
      // transition={{ duration: 1.5 }}'
      sx={{
        border: "solid 1px",
        color: "accent",
        width: "100%"
      }}
    />
  );
};

export default Divider;
