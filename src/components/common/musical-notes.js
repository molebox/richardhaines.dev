/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { useRandomInterval } from "./useRandomInterval";

const DEFAULT_COLOR = "#DE3C4B";

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateMusicalNote = (color = DEFAULT_COLOR) => {
  const music = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(50, 60),
    style: {
      top: random(-30, 100) + "%",
      left: random(-30, 100) + "%"
    }
  };
  return music;
};

const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

const MusicalNotes = ({ color = DEFAULT_COLOR, children, ...delegated }) => {
  const [musicalNotes, setMusicalNotes] = React.useState(() => {
    return range(5).map(() => generateMusicalNote(color));
  });

  useRandomInterval(
    () => {
      const notes = generateMusicalNote(color);
      const now = Date.now();
      const nextNotes = musicalNotes.filter(sp => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextNotes.push(notes);
      setMusicalNotes(nextNotes);
    },
    50,
    450
  );
  return (
    <Wrapper {...delegated}>
      {musicalNotes.map(note => (
        <MusicNote key={note.id} color={note.color} size={note.size} style={note.style} />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};
const MusicNote = ({ size, color, style }) => {
  const path =
    "M30.626 1.22a1.005 1.005 0 00-.843-.196l-18 4A1 1 0 0011 6v18c-1.055-.623-2.448-1-4-1-3.364 0-6 1.757-6 4s2.636 4 6 4 6-1.757 6-4V9.802l16-3.555V20C27.945 19.377 26.552 19 25 19c-3.364 0-6 1.757-6 4s2.636 4 6 4 6-1.757 6-4V2c0-.303-.138-.59-.374-.78z";
  return (
    <MusicNotesWrapper style={style}>
      <MusicSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </MusicSvg>
    </MusicNotesWrapper>
  );
};
const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
      transform: rotate(90deg)
  }
  100% {
    transform: rotate(180deg);
  }
`;
const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;
const MusicNotesWrapper = styled.span`
  position: absolute;
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 700ms forwards;
  }
`;
const MusicSvg = styled.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1000ms linear;
  }
`;
const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;
export default MusicalNotes;
