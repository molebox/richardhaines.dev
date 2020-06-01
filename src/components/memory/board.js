/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Card from "./card";

// https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

const Board = ({ corgis }) => {
  const [count, setCount] = React.useState(0);
  const [matches, setMatches] = React.useState([]);
  const [resetCards, setResetCards] = React.useState(false);
  const [cardName, setCardName] = React.useState("");
  const [firstGuess, setFirstGuess] = React.useState("");
  const [secondGuess, setSecondGuess] = React.useState("");

  React.useEffect(() => {
    if (count <= 2) {
      if (count === 1) {
        setFirstGuess(cardName);
      }
      if (count === 2) {
        setSecondGuess(cardName);
      }

      if (count === 2 && firstGuess !== "" && secondGuess !== "") {
        console.log("guesses: ", firstGuess, secondGuess);

        if (firstGuess === secondGuess) {
          console.log("MATCH");
          setMatches(matches => [...matches, { firstGuess, secondGuess }]);
          resetGuesses();
        } else {
          resetGuesses();
        }
      }
    }
  }, [count, firstGuess, secondGuess]);

  const getFlippedCard = ({ name, id }) => {
    console.log({ id, name });
    setCount(count + 1);
    setCardName(name);
  };

  const resetGuesses = () => {
    setFirstGuess("");
    setSecondGuess("");
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
            count={count}
            id={node.id}
            matches={matches}
          />
        );
      })}
    </section>
  );
};

export default Board;
