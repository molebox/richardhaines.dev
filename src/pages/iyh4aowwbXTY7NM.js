/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import P from "../components/common/p";
import { gsap } from "gsap";
import Main from "../components/site/layout/main";
import Divider from "../components/common/divider";
import hoverEffect from "hover-effect";
import PageTitle from "./../components/common/page-title";
import Board from "../components/memory/board";
import Card from "../components/memory/card";
import { graphql, useStaticQuery } from "gatsby";
import ExternalLink from "./../components/common/external-link";

const SecretPage = () => {
  const ref = React.useRef(null);
  const data = useStaticQuery(query);
  const corgis = data.allMemoryJson.nodes;

  let wholeBoard = corgis.concat(corgis);

  const shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  // React.useEffect(() => {
  //   const animation = new hoverEffect({
  //     parent: ref.current,
  //     intensity: 1,
  //     image1: "/corgi1.jpg",
  //     image2: "/corgi2.jpg",
  //     displacementImage: "/displacementcorgi.jpg"
  //   });
  // }, []);

  React.useEffect(() => {
    gsap.to("body", { visibility: "visible" });

    gsap.fromTo(
      ".corgi-box",
      { opacity: 0 },
      { opacity: 1, delay: 1.9, duration: 1 }
    );
  }, []);

  return (
    <Main>
      <Divider />
      <PageTitle title="Oh! You found me!" />
      <div
        sx={{
          marginBottom: "4em"
        }}
      >
        <P>
          Welcome to the very secret corgi memory game. You know memory, right?
          Match 2 pictures until none are left.
        </P>
        <P>
          If you have stumbled upon this page then please note that this is WIP
          and is not yet complete.
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
      <section>
        <Board corgis={shuffle(wholeBoard)} />
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
