/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Global, css } from "@emotion/core";
import Header from "../components/site/layout/header";
import { PhoneTemplateAreas, TabletTemplateAreas, DesktopTemplateAreas } from "./../window/breakpoints";
import Footer from "../components/site/layout/footer";
import Nav from "./../components/site/layout/nav";
import SidebarNav from "../components/site/layout/sidebar/sidebar-nav";
import SocialSideBar from "./../components/site/layout/sidebar/social-sidebar";

const Layout = ({ children }) => {
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
            visibility: hidden;
            scroll-behavior: smooth;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            overflow-x: hidden;
          }
        `}
      />
      <div
        sx={{
          display: "grid",
          gridTemplateRows: "auto",
          gridTemplateColumns: ["repeat(4, 1fr)", "repeat(6, 1fr)", "repeat(8, 1fr)"],
          gridTemplateAreas: [PhoneTemplateAreas, TabletTemplateAreas, DesktopTemplateAreas],
          padding: "0 1em"
        }}
      >
        <SocialSideBar />
        <Header>
          <Nav />
          <SidebarNav />
        </Header>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
