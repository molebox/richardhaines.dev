/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import gsap from "gsap";
import GatsbyImage from "gatsby-image";
import { CorgiIcon } from "./../common/icons";

const Card = ({ index, backImage, name, getFlippedCard }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  React.useEffect(() => {
    if (isFlipped) {
      getFlippedCard({ name, isFlipped });
    }
  }, [isFlipped]);

  // React.useEffect(() => {
  //   console.log({reset})
  //   if (reset) {
  //     setIsFlipped(false);
  //     gsap.to(`.card${index}`, { rotateY: 180, duration: 1 });
  //   }

  // }, [reset])

  // Slight bounce animation
  const handleMouseEnter = e =>
    gsap.to(e.target, { scale: 1.05, duration: 0.3 });

  const handleMouseLeave = e =>
    gsap.to(e.target, { scale: 1, duration: 0.4, ease: "back(10)" });

  const onCardClick = () => {
    setIsFlipped(isFlipped => !isFlipped);
    isFlipped
      ? gsap.to(`.card${index}`, { rotateY: 180, duration: 0.8 })
      : gsap.to(`.card${index}`, { rotateY: -180, duration: 0.8 });
  };

  const front = () => <CorgiIcon />;

  const back = () => (
    <GatsbyImage
      sx={{
        width: "100%",
        height: "100%"
      }}
      fluid={backImage}
    />
  );

  let content = isFlipped ? back() : front();

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
        // pointerEvents: reset ? 'none' : 'auto'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onCardClick}
      className={`card${index}`}
    >
      {content}
    </div>
  );
};

export default Card;
