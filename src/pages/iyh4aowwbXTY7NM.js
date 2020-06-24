/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import P from "../components/common/p";
import { gsap } from "gsap";
import Main from "../components/site/layout/main";
import Divider from "../components/common/divider";
import PageTitle from "./../components/common/page-title";
import Board from "../components/memory/board";
import { graphql, useStaticQuery } from "gatsby";
import ExternalLink from "./../components/common/external-link";
import LinearGradientText from "../components/common/gradient-text";

const SecretPage = () => {
  const data = useStaticQuery(query);
  const [corgis, setCorgis] = React.useState([]);
  const [flipped, setFlipped] = React.useState([]);
  const [solved, setSolved] = React.useState([]);
  const [disabled, setDisabled] = React.useState(false);

  const shuffle = array => {
    const copy = array.slice(0);
    for (let i = 0; i < array.length - 1; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = copy[i];
      copy[i] = copy[randomIndex];
      copy[randomIndex] = temp;
    }
    return copy;
  };

  React.useEffect(() => {
    setCorgis(shuffle(data.allMemoryJson.nodes));
  }, []);

  const handleClick = id => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 1500);
      }
    }
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const isMatch = id => {
    const clickedCard = corgis.find(card => card.id === id);
    const flippedCard = corgis.find(card => flipped[0] === card.id);
    return flippedCard.name === clickedCard.name;
  };

  const sameCardClicked = id => flipped.includes(id);

  React.useEffect(() => {
    gsap.to("body", { visibility: "visible" });

    gsap.fromTo(".corgi-board", { opacity: 0 }, { opacity: 1, delay: 1.9, duration: 1 });
  }, []);

  React.useEffect(() => {
    if (solved.length === 20) {
      gsap.to(".corgi-board", {
        duration: 1,
        scale: 0.7,
        y: 40,
        ease: "power1.inOut",
        stagger: {
          grid: [5, 4],
          from: "random",
          amount: 1.5
        }
      });

      gsap.fromTo(".winner", { opacity: 0, x: 1000 }, { opacity: 1, delay: 1, duration: 1, x: 0, ease: "back(5)" });
    }
  }, [solved]);

  return (
    <Main>
      <Divider />
      <PageTitle title="Oh! You found me, you sly dog you..." />
      <div
        sx={{
          marginBottom: "4em"
        }}
      >
        <P>
          Welcome to the very secret corgi memory game. You know memory, right? Match 2 pictures until none are left.
          LETS GOOOO
        </P>
      </div>

      <Divider />
      {/* <div
        sx={{
          height: 500,
          width: 500,
          margin: "2em auto"
        }}
        className="corgi-box"
        ref={ref}
      ></div> */}

      <section
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly"
        }}
      >
        {solved.length === 20 ? (
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "min-content"
            }}
            className="winner"
          >
            <LinearGradientText size={50}>Winner Winner Chicken Dinner!</LinearGradientText>
            <P>Now get on out of here you rascal!</P>
          </div>
        ) : null}
        <Board corgis={corgis} handleClick={handleClick} flipped={flipped} disabled={disabled} solved={solved} />
      </section>
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <P>
          All Pictures from
          <ExternalLink href="https://unsplash.com/collections/3336303/corgi-%F0%9F%90%B6">
            {" "}
            Stefanie Henneböhl unsplash collection
          </ExternalLink>
        </P>
      </div>
    </Main>
  );
};

export default SecretPage;

export const query = graphql`
  query MemoryQuery {
    allMemoryJson {
      nodes {
        frontImage {
          alt
          src {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
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
        id
      }
    }
  }
`;
