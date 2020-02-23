/** @jsx jsx */
import { jsx } from "theme-ui";

const Main = props => (
  <main
    sx={{
      gridArea: "main",
      // maxWidth: "1200px",
      backgroundColor: "background",
      minHeight: "calc(100vh - 60px)",
      // height: '1000px',
      paddingTop: "60px"
    }}
  >
    {props.children}
  </main>
);

export default Main;
