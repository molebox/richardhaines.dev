/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./menu-toggle";
import LinkContainer from "./link-container";
import { useDimensions } from "./use-dimensions";

const sidebar = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 200}px at 25px 25px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(20px at 25px 25px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const SidebarNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      custom={height}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: "100px",
        visibility: ["visible", "hidden", "hidden"],
        zIndex: "1000"
      }}
    >
      <motion.div
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "200px",
          backgroundColor: "accent"
        }}
        variants={sidebar}
      />
      <LinkContainer toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default SidebarNav;
