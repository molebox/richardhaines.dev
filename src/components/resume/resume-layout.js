/** @jsx jsx */
import { jsx } from "theme-ui";

const ResumeLayout = ({ children }) => {
  return (
    <section
      sx={{
        display: "grid",
        gridTemplateRows: ["auto", "repeat(6, 1fr)"],
        gap: "3em",
        margin: "3em auto"
      }}
    >
      {children}
    </section>
  );
};

export default ResumeLayout;
