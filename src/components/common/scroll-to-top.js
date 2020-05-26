/** @jsx jsx */
import { jsx } from "theme-ui";
import { RocketIcon } from "./icons";
import scrollTo from "gatsby-plugin-smoothscroll";
import { motion } from "framer-motion";

const ScrollToTop = () => (
  <motion.div
    drag
    dragElastic={0.7}
    dragConstraints={{
      top: 0,
      right: 0,
      left: 0,
      bottom: -20
    }}
    sx={{
      cursor: "pointer",
      position: "sticky",
      top: "80%",
      right: "0",
      display: ["none", "flex"],
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}
    onClick={() => scrollTo("#toTop")}
  >
    <RocketIcon />
    <div sx={{ fontFamily: "heading", textTransform: "uppercase" }}>
      pull back
    </div>
    <div sx={{ fontFamily: "heading", textTransform: "uppercase" }}>
      blast up!
    </div>
  </motion.div>
);

export default ScrollToTop;
