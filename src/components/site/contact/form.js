/** @jsx jsx */
import { jsx } from "theme-ui";
import Label from "./label";
import Input from "./input";

const Form = () => {
  return (
    <form
      sx={{
        padding: "1em",
        fontFamily: "body",
        border: "solid 1px",
        borderColor: "accent",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        width: "100%"
      }}
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="bot-field" />
      <Label>
        Your Name: <Input type="text" name="name" />
      </Label>

      <Label>
        Your Email: <Input type="email" name="email" />
      </Label>

      <Label>
        Message:{" "}
        <textarea
          sx={{
            marginTop: "1em"
          }}
          rows="10"
          required
          name="message"
        ></textarea>
      </Label>

      <button
        sx={{
          fontFamily: "heading",
          fontWeight: "heading",
          border: "0.1em solid",
          padding: "0.35em 1.2em",
          borderColor: "accent",
          backgroundColor: "background",
          color: "text",
          cursor: "pointer",
          textTransform: "uppercase",
          height: "2.5em",
          "&:hover": {
            color: "primary",
            backgroundColor: "accent",
            fontWeight: "bold",
            boxShadow: "-3px 3px #00001F"
          },
          "&:active": {
            boxShadow: "-1px 1px #00001F"
          }
        }}
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
