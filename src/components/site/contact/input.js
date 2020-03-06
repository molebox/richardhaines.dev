/** @jsx jsx */
import { jsx } from "theme-ui";

const Input = ({ type, name }) => (
  <input
    sx={{
      border: "2px solid",
      borderColor: "accent",
      height: "2em",
      marginTop: "1em"
    }}
    type={type}
    name={name}
  />
);

export default Input;
