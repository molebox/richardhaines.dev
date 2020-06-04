/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IconContainer = ({ children }) => {
  gsap.registerPlugin(ScrollTrigger);
  React.useEffect(() => {
    
    gsap.fromTo(
      ".icon",
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".icon",
          toggleActions: "restart none none none"
        },
        stagger: {
          duration: 3,
          amount: 1,
          from: "end"
        },
        delay: 1.2,
        opacity: 1
      }
    );
  }, []);

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "5em auto"
      }}
    >
      {children}
    </div>
  );
};

export default IconContainer;
