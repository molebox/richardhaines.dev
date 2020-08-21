import React from "react";
import { navigate } from "gatsby";

export const SiteContext = React.createContext(null);
export const CODE = "CORGI";

const SiteProvider = ({ children }) => {
  const [codeActive, setCodeActive] = React.useState(false);
  const keyed = React.useRef([]);
  const splitCode = React.useRef(CODE.split(""));

  const handlePress = e => {
    keyed.current = keyed.current.length ? [...keyed.current, e.key] : [e.key];
    console.log(keyed.current);
    if (
      splitCode.current.slice(0, keyed.current.length).every((v, i) => v === keyed.current[i]) &&
      keyed.current.length === splitCode.current.length
    ) {
      // We got a match, let's do something cool 🎉
      window.removeEventListener("keydown", handlePress);
      setCodeActive(true);
      keyed.current = [];
    } else if (!splitCode.current.slice(0, keyed.current.length).every((v, i) => v === keyed.current[i])) {
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

  React.useEffect(() => {
    if (codeActive === true) {
      navigate("/iyh4aowwbXTY7NM/");
      window.addEventListener("keydown", handlePress);
    }
    setCodeActive(false);
  }, [codeActive]);

  return <SiteContext.Provider value={{ codeActive, setCodeActive }}>{children}</SiteContext.Provider>;
};

export default SiteProvider;
