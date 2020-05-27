/** @jsx jsx */
import { jsx } from "theme-ui";
import TableOfContents from "../copy-paste/toc";

export default props => {
  return (
    <section
      sx={{
        gridTemplateColumns: ["1fr", "2fr 1fr"],
        gridTemplateRows: "auto"
      }}
    >
      {props.children}
    </section>
  );
};
