/** @jsx jsx */
import { jsx } from "theme-ui";
import { GatsbyIcon, ReactIcon, JSIcon, TypeScriptIcon } from './../../common/icons';
import React from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const IconContainer = () => {
  const iconRef = React.useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  React.useEffect(() => {

    if (iconRef.current) {
      gsap.to(iconRef.current, {
        scrollTrigger: {
          trigger: iconRef.current,
          toggleActions: "restart none none none"
        },
        stagger: {
          duration: 3,
          amount: 1,
          from: "end"
        },
        delay: 1.2,
        opacity: 1
      });
    }
   
  }, [])

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "5em auto"
      }}
      ref={iconRef}
    >
        <GatsbyIcon iconRef={iconRef} />
        <ReactIcon iconRef={iconRef} />
        <JSIcon iconRef={iconRef} />
        <TypeScriptIcon iconRef={iconRef} />
    </div>
  );
};

export default IconContainer;
