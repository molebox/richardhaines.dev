/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import gsap from "gsap";
import Front from "./front";
import Back from "./back";

const useDelayedRender = delay => {
  const [delayed, setDelayed] = React.useState(true);
  React.useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), delay);
    return () => clearTimeout(timeout);
  }, []);
  return fn => !delayed && fn();
};

const Card = ({
  id,
  index,
  getCount,
  backImage,
  name,
  getFlippedCard,
  count,
  matches,
  resetCards,
  flippedCards
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [flippedId, setFlippedId] = React.useState("");
  const [isMatch, setIsMatch] = React.useState(false);
  const [selectedAsPair, setSelectedAsPair] = React.useState(false);
  const delay = useDelayedRender(2000);

  React.useEffect(() => {
    if (resetCards && flippedCards.some(e => e.name === name) && count <= 3) {
      flippedCards.forEach(card => {
        if (card.id === flippedId) {
          setIsFlipped(isFlipped => !isFlipped);
          // gsap.to(`.card${flippedId}${index}`, { rotateY: -180, duration: 0.8, delay: 1 })
        }
      });
    }
  }, [resetCards]);

  React.useEffect(() => {
    if (isFlipped) {
      // if flipped then send the name and id to the board and set the flipped cards id
      getFlippedCard({ name, id });
      setFlippedId(id);
      // gsap.to(`.card${id}${index}`, { rotateY: 180, duration: 0.8, delay: 0.3 })
    } else {
      // gsap.to(`.card${id}${index}`, { rotateY: -180, duration: 0.8, delay: 1.5 })
    }
  }, [isFlipped]);

  React.useEffect(() => {
    if (count === 2) {
      // if the count is at 2 and the id matches to the flipped card then flip it
      if (id === flippedId) {
        console.log({ id });
        // gsap.to(`.card${flippedId}${index}`, {
        //   rotateY: 180,
        //   duration: 1.6,
        //   delay: 1.2
        // });
      }
    }

    if (flippedCards.length === 2 && !isMatch) {
      console.log({ flippedCards });
      flippedCards.forEach(card => {
        if (card.id === flippedId) {
          const flip = gsap.to(`.card${flippedId}${index}`, {
            rotateY: -180,
            duration: 0.8,
            delay: 1
          });
          setTimeout(flip, 2000);

          // gsap.to(`.card${flippedId}${index}`, { rotateY: -180, duration: 0.8, delay: 1 })
        }
      });
    }
  }, [count, flippedCards]);

  React.useEffect(() => {
    // if there is a match then scale down the two cards and set them as flipped
    if (matches.length) {
      matches.forEach(match => {
        console.log("match cards", match);
        if (match.firstGuess === flippedId) {
          setIsFlipped(isFlipped => !isFlipped);
          // gsap.to(`.card${id}${index}`, { scale: 0.7, duration: 1, delay: 1.2 });
          setIsMatch(true);
        }
      });
    }
  }, [matches]);

  // Slight bounce animation
  const handleMouseEnter = e =>
    gsap.to(e.target, { scale: 1.05, duration: 0.3 });

  const handleMouseLeave = e =>
    gsap.to(e.target, { scale: 1, duration: 0.4, ease: "back(10)" });

  const onCardClick = () => {
    getCount(count + 1);
    setIsFlipped(isFlipped => !isFlipped);
  };

  const content = () => {
    if (isMatch) {
      return <Back backImage={backImage} pairMatch={isMatch} />;
    }
    if (selectedAsPair) {
      return <Back backImage={backImage} pairMatch={isMatch} />;
    }
    return isFlipped ? (
      <Back backImage={backImage} pairMatch={isMatch} />
    ) : (
      <Front selectedAsPair={selectedAsPair} />
    );
  };

  return (
    <div
      sx={{
        border: "solid 2px",
        borderColor: "accent",
        width: 155,
        height: 155,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onCardClick}
      className={`card${id}${index}`}
    >
      {content()}
    </div>
  );
};

export default Card;
