/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import gsap from "gsap";
import GatsbyImage from "gatsby-image";
import { CorgiIcon } from "./../common/icons";

const Card = React.memo(
  ({ id, index, backImage, name, getFlippedCard, count, matches }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const [flippedId, setFlippedId] = React.useState("");

    React.useEffect(() => {
      if (isFlipped) {
        // if flipped then send the name and id to the board and set the flipped cards id
        getFlippedCard({ name, id });
        setFlippedId(id);
      }
    }, [isFlipped]);

    React.useEffect(() => {
      if (count === 2) {
        // if the count is at 2 and the id matches to the flipped card then flip it
        if (id === flippedId) {
          console.log({ id });
          gsap.to(`.card${id}${index}`, {
            rotateY: 180,
            duration: 1.6,
            delay: 1.2
          });
          setIsFlipped(false);
        }
      }
    }, [count]);

    React.useEffect(() => {
      // if there is a match then scale down the two cards and set them as flipped
      if (matches.length) {
        console.log({ id });
        gsap.to(`.card${id}${index}`, { scale: 0.7, duration: 1, delay: 1.2 });
        setIsFlipped(true);
      }
    }, [matches]);

    // Slight bounce animation
    const handleMouseEnter = e =>
      gsap.to(e.target, { scale: 1.05, duration: 0.3 });

    const handleMouseLeave = e =>
      gsap.to(e.target, { scale: 1, duration: 0.4, ease: "back(10)" });

    const onCardClick = () => {
      setIsFlipped(isFlipped => !isFlipped);

      // gsap.to(`.card${id}${index}`, { rotateY: 180, duration: 0.8 })
      isFlipped
        ? gsap.to(`.card${id}${index}`, { rotateY: 180, duration: 0.8 })
        : gsap.to(`.card${id}${index}`, { rotateY: -180, duration: 0.8 });
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
          alignItems: "center",
          pointerEvents: isFlipped ? "none" : "auto"
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onCardClick}
        className={`card${id}${index}`}
      >
        {content}
      </div>
    );
  }
);

export default Card;
