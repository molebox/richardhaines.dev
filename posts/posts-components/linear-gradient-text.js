import React from 'react';
import styled from '@emotion/styled';

const Style = styled.p`
margin: 2em 0;
font-family: Jost;
font-size: 1.5em;

  background-image: linear-gradient(
    90deg,
    rgba(127, 9, 9, 1) 0%,
    rgba(255, 197, 0, 1) 12%,
    rgba(238, 225, 23, 1) 24%,
    rgba(13, 98, 23, 1) 48%,
    rgba(0, 10, 144, 1) 72%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // font-weight: bold;
`;

const Text = ({children}) => (
  <Style>
    {children}
  </Style>
)

export default Text;