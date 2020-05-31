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

const SecretPage = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const animation = new hoverEffect({
      parent: ref.current,
      intensity: 1,
      image1: "/corgi1.jpg",
      image2: "/corgi2.jpg",
      displacementImage: "/displacementcorgi.jpg"
    });
  }, []);

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
          Match 2 pictures until none are left. All Pictures from
          https://unsplash.com/collections/3336303/corgi-%F0%9F%90%B6 - MOVE
          THIS
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
          justifyItems: "center",
          alignItems: "center",
          width: "100%",
          height: "100%"
        }}
      >
        <Board />
      </section>
    </Main>
  );
};

export default SecretPage;
