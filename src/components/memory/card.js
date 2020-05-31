/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import gsap from "gsap";
import GatsbyImage from "gatsby-image";
import { CorgiIcon } from "./../common/icons";

const Card = ({ index, backImage }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleMouseEnter = e =>
    gsap.to(e.target, { scale: 1.05, duration: 0.3 });

  const handleMouseLeave = e =>
    gsap.to(e.target, { scale: 1, duration: 0.4, ease: "back(10)" });

  const onCardClick = () => {
    setIsFlipped(!isFlipped);
    if (isFlipped) {
      gsap.to(`.card${index}`, { rotateY: 180 });
    }
    gsap.to(`.card${index}`, { rotateY: -180 });
    // isFlipped
    //   ? gsap.to(`.card${index}`, { rotateY: 180 })
    //   : gsap.to(`.card${index}`, { rotateY: -180 });
  };

  // React.useEffect(() => {
  //     gsap.to(".card", {rotateY: 180})
  // }, [isFlipped])

  return (
    <div
      sx={{
        border: "solid 2px",
        borderColor: "accent",
        width: 150,
        height: 150,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onCardClick}
      className={`card${index}`}
    >
      {isFlipped ? (
        <GatsbyImage
          sx={{
            width: "100%",
            height: "100%"
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // backgroundColor: isFlipped ? 'accent' : 'text',
            // backgroundImage: isFlipped ? url("/corgi1.jpg") : 'text'
            // backgroundImage: isFlipped ? `url(${backImage})` : `url(${frontIcon})`,
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center'
          }}
          fluid={backImage}
        />
      ) : (
        <CorgiIcon />
      )}
    </div>
  );
};

export default Card;
