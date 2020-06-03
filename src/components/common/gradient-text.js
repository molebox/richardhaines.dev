import React from "react";
import styled from "@emotion/styled";

const Style = styled.p`
  margin-top: 2em;
  font-family: Jost;
  font-size: ${props => props.size}px;

  background-image: linear-gradient(
    90deg,
    rgba(127, 9, 9, 1) 0%,
    rgba(255, 197, 0, 1) 12%,
    rgba(238, 225, 23, 1) 24%,
    rgba(127, 9, 9, 1) 48%,
    rgba(255, 197, 0, 1) 72%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = ({ children, size }) => <Style size={size}>{children}</Style>;

export default Text;
