import React from "react";
import { navigate } from "gatsby";

export const CODE = "BEAR";

/**
 * Taken with love from @jh3yy
 * Source: https://codepen.io/jh3y/pen/pGBYev
 * A hook that provides a way to hook into users typing out easter egg codes 😅
 * @param {String} code - Cheat code for user to enter on keypress
 */
export const useCheatCode = code => {
  console.log("CHEAT HOOK RENDERED");
  const [active, setActive] = React.useState(false);
  const keyed = React.useRef([]);
  const splitCode = React.useRef(code.split(""));

  const handlePress = e => {
    console.log("HOOK EVENT: ", e.key);
    keyed.current = keyed.current.length ? [...keyed.current, e.key] : [e.key];
    console.log(keyed.current);
    if (
      splitCode.current
        .slice(0, keyed.current.length)
        .every((v, i) => v === keyed.current[i]) &&
      keyed.current.length === splitCode.current.length
    ) {
      console.log("MATCH!");
      // We got a match, let's do something cool 🎉
      window.removeEventListener("keydown", handlePress);
      setActive(true);
      keyed.current = [];
      // navigate('/secret-page/')
    } else if (
      !splitCode.current
        .slice(0, keyed.current.length)
        .every((v, i) => v === keyed.current[i])
    ) {
      console.log("NO MATCH");
      // No match so reset 👎
      keyed.current = [];
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", handlePress);
    return () => {
      window.removeEventListener("keydown", handlePress);
    };
  }, []);
  return { active, setActive };
};
