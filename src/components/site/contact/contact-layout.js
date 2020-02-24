/** @jsx jsx */
import { jsx } from "theme-ui";

const ContactLayout = ({ children }) => {
  return (
    <section
      sx={{
        display: "grid",
        gridTemplateColumns: ["auto", "1fr 1fr"],
        gap: "3em",
        margin: "3em auto"
      }}
    >
      {children}
    </section>
  );
};

export default ContactLayout;
