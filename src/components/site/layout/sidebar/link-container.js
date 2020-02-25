/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const liVariants = {
  open: {
    y: 100,
    x: 50,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -50 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const LinkContainer = ({ toggle }) => {
  return (
    <motion.ul
      sx={{
        listStyle: "none"
      }}
      variants={variants}
    >
      <motion.li
        variants={liVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        sx={{
          margin: "2em auto"
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "heading",
            fontSize: ["0.8em", "0.9em", "1em"],
            color: "text",
            letterSpacing: "text",
            textTransform: "uppercase",
            ":hover": {
              color: "accent"
            }
          }}
          to="/"
          onClick={toggle}
        >
          Home
        </Link>
      </motion.li>
      <motion.li
        variants={liVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        sx={{
          margin: "2em auto"
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "heading",
            fontSize: ["0.8em", "0.9em", "1em"],
            color: "text",
            letterSpacing: "text",
            textTransform: "uppercase",
            ":hover": {
              color: "accent"
            }
          }}
          to="/blog"
          onClick={toggle}
        >
          Blog
        </Link>
      </motion.li>
      {/* <motion.li>
            <Link
                sx={{
                textDecoration: "none",
                fontFamily: "heading",
                fontSize: ["0.8em", "0.9em", "1em"],
                color: "text",
                letterSpacing: "text",
                textTransform: "uppercase",
                ":hover": {
                    color: "accent"
                }
                }}
                to="/"
            >
                Resume
            </Link>
           </motion.li> */}
      <motion.li
        variants={liVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "heading",
            fontSize: ["0.8em", "0.9em", "1em"],
            color: "text",
            letterSpacing: "text",
            textTransform: "uppercase",
            ":hover": {
              color: "accent"
            }
          }}
          to="/contact"
          onClick={toggle}
        >
          Contact
        </Link>
      </motion.li>
    </motion.ul>
  );
};

export default LinkContainer;
