/** @jsx jsx */
import { jsx } from "theme-ui";

const Main = props => (
  <main
    sx={{
      gridArea: "main",
      backgroundColor: "background",
      minHeight: "calc(100vh - 20px)",
      paddingTop: "1.5em"
    }}
  >
    {props.children}
  </main>
);

export default Main;
