/** @jsx jsx */
import { jsx } from "theme-ui";

export default ({ children }) => (
  <section
    sx={{
      display: "grid",
      gridTemplateColumns: ["1fr", "2fr 1fr"],
      gridAutoRows: "auto"
    }}
  >
    {children}
  </section>
);
