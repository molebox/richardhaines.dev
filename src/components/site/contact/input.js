/** @jsx jsx */
import { jsx } from "theme-ui";

const Input = ({ type, name }) => (
  <input
    sx={{
      border: "1px solid",
      borderColor: "accent",
      borderRadius: "5px",
      height: "2em",
      marginTop: "1em"
    }}
    type={type}
    name={name}
  />
);

export default Input;
