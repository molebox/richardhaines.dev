import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import Header from "../components/site/layout/header";
import useBreakpoints from "./../window/index";
import {
  breakpoints,
  PhoneTemplateAreas,
  TabletTemplateAreas,
  DesktopTemplateAreas
} from "./../window/breakpoints";
import Footer from "../components/site/layout/footer";
import Nav from "./../components/site/layout/nav";
import Divider from "../components/common/divider";

const LayoutContainer = styled.div`
    // height: 100vh;
    ${props =>
      props.xs
        ? `
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        grid-template-areas: ${PhoneTemplateAreas}
    `
        : null}
    ${props =>
      props.sm
        ? `
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-template-areas: ${TabletTemplateAreas}
    `
        : null}
    ${props =>
      props.md
        ? `
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas: ${DesktopTemplateAreas}
    `
        : null}
    
    ${props =>
      props.lg
        ? `
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    // grid-template-rows: auto;
    grid-template-areas: ${DesktopTemplateAreas}
    `
        : null}
`;

const Layout = ({ children }) => {
  let { xs, sm, md, lg } = useBreakpoints(breakpoints);
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            scroll-behavior: smooth;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            overflow-x: hidden;
          }
        `}
      />
      <LayoutContainer xs={xs} sm={sm} md={md} lg={lg}>
        <Header>
          <Nav />
        </Header>
        {children}
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default Layout;
