/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Card from "./card";

// https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

const Board = ({ corgis }) => {
  const [count, setCount] = React.useState(0);
  const [match, setMatch] = React.useState(false);
  const [resetCards, setResetCards] = React.useState(false);
  const [isCardFlipped, setIsCardFlipped] = React.useState(false);
  const [cardName, setCardName] = React.useState("");
  // const [flippedCards, setFlippedCards] = React.useState([]);

  const [guess, setGuess] = React.useState({
    firstGuess: "",
    secondGuess: ""
  });

  React.useEffect(() => {
    console.log("whats the count now", count);
    if (count <= 2) {
      console.log("im in");
      if (count === 1) {
        console.log("firstGuess:", cardName);
        setGuess({ firstGuess: cardName });
      }
      if (count === 2) {
        console.log("second count");
        console.log("secondGuess:", cardName);
        setGuess({ secondGuess: cardName });
      }

      if (count === 2 && guess.firstGuess !== "" && guess.secondGuess !== "") {
        console.log("they are not empty", guess);
        console.log(guess.firstGuess);
        console.log(guess.secondGuess);

        if (guess.firstGuess === guess.secondGuess) {
          console.log("MATCH");
          cardsMatch();
          // resetGuesses();
        }
      }
    }
  }, [count]);

  const cardsMatch = () => {
    console.log("MATCH");
    setMatch(true);
  };

  const getFlippedCard = ({ name, isFlipped }) => {
    console.log({ isFlipped, name });
    setCount(count + 1);
    setIsCardFlipped(isFlipped);
    setCardName(name);
  };

  const resetGuesses = () => {
    setGuess({
      firstGuess: "",
      secondGuess: ""
    });
    setCount(0);
    setResetCards(true);
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
            key={node.name + index}
            getFlippedCard={getFlippedCard}
          />
        );
      })}
    </section>
  );
};

export default Board;
