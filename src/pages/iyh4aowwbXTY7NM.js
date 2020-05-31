/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import P from "../components/common/p";
import { gsap } from "gsap";
import Main from "../components/site/layout/main";
import Divider from "../components/common/divider";
import hoverEffect from "hover-effect";
import PageTitle from "./../components/common/page-title";

const SecretPage = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const animation = new hoverEffect({
      parent: ref.current,
      intensity: 1,
      image1: "/static/corgi1-fd85ef4b37d38ea9a393f6c2fb487ff4.jpg",
      image2: "/static/corgi2-fe88c35428948866fbc584b0d6a87871.jpg",
      displacementImage: "/static/corgi2-fe88c35428948866fbc584b0d6a87871.jpg"
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
      <PageTitle title="A Secret Corgi Page!" />
      <div
        sx={{
          marginBottom: "4em"
        }}
      >
        <P>
          Welcome to the very secret corgi page. Here you will find a picture of
          a very cute corgi{" "}
        </P>
      </div>

      <Divider />
      <div
        sx={{
          height: 500,
          width: 500,
          margin: "2em auto"
        }}
        className="corgi-box"
        ref={ref}
      ></div>
    </Main>
  );
};

export default SecretPage;
