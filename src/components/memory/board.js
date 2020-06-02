/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Card from "./card";

// https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

const Board = ({ corgis }) => {
  const [count, setCount] = React.useState(0);
  const [matches, setMatches] = React.useState([]);
  const [resetCards, setResetCards] = React.useState(false);
  const [flippedCards, setFlippedCards] = React.useState([]);

  React.useEffect(() => {
    console.log({ count });
  }, [count]);

  React.useEffect(() => {
    if (count < 2) {
      if (
        count === 2 &&
        flippedCards[0].name !== "" &&
        flippedCards[1].name !== ""
      ) {
        console.log("guesses: ", flippedCards[0].name, flippedCards[1].name);

        if (flippedCards[0].name === flippedCards[1].name) {
          console.log("MATCH");
          const firstGuess = flippedCards[0].name;
          const secondGuess = flippedCards[1].name;
          setMatches(matches => [...matches, { firstGuess, secondGuess }]);
          resetGuesses();
        } else {
          resetGuesses();
        }
      }
    }
  }, [count, flippedCards]);

  const getFlippedCard = ({ name, id }) => {
    // console.log({ id, name });
    setFlippedCards(flippedCards => [...flippedCards, { name, id }]);
  };

  const resetGuesses = () => {
    // setFlippedCards([]);
    setCount(0);
    setResetCards(true);
  };

  const getCount = count => {
    setCount(count);
  };

  return (
    <section
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5,  150px)",
        gridAutoRows: "auto",
        gap: "1em",
        margin: "4em auto",
        width: "100%",
        height: "auto",
        minHeight: "600px",
        placeContent: "center"
      }}
    >
      {corgis.map((node, index) => {
        return (
          <Card
            index={index}
            backImage={node.backImage.src.childImageSharp.fluid}
            name={node.name}
            key={node.id + index}
            getFlippedCard={getFlippedCard}
            count={count}
            id={node.id}
            matches={matches}
            resetCards={resetCards}
            flippedCards={flippedCards}
            getCount={getCount}
          />
        );
      })}
    </section>
  );
};

export default Board;
