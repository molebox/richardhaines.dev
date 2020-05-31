/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Card from "./card";
import { graphql, useStaticQuery } from "gatsby";

// https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

const Board = () => {
  const [count, setCount] = React.useState(0);
  const data = useStaticQuery(query);
  const corgis = data.allMemoryJson.nodes;
  console.log({ corgis });

  const shuffle = array => array.sort(() => 0.5 - Math.random());

  let wholeBoard = corgis.concat(corgis);

  React.useEffect(() => {
    wholeBoard = shuffle(wholeBoard);
  }, []);

  return (
    <section
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5,  150px)",
        // gridTemplateRows: "repeat(5, 150px)",
        gridAutoRows: "auto",
        gap: "1em",
        margin: "4em auto",
        width: "100%",
        height: "100vh",
        placeContent: "center"
      }}
    >
      {wholeBoard.map((node, index) => {
        console.log({ node });
        return (
          <Card
            index={index}
            backImage={node.backImage.src.childImageSharp.fluid}
          />
        );
      })}
    </section>
  );
};

export default Board;

export const query = graphql`
  query MemoryQuery {
    allMemoryJson {
      nodes {
        backImage {
          alt
          src {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        name
      }
    }
  }
`;
