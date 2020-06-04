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
        borderRadius: "5px",
        borderColor: "accent",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "secondaryDarker"
      }}
      name="contact"
      method="POST"
      data-netlify="true"
      className="contact-form"
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
            marginTop: "1em",
            border: "1px solid",
            borderColor: "accent",
            borderRadius: "5px"
          }}
          rows="10"
          required
          name="message"
        ></textarea>
      </Label>

      <button
        sx={{
          fontFamily: "heading",
          fontWeight: "bold",
          border: "1px solid",
          borderRadius: "5px",
          padding: "0.35em 1.2em",
          borderColor: "accent",
          backgroundColor: "accent",
          color: "background",
          cursor: "pointer",
          textTransform: "uppercase",
          height: "2.5em",
          "&:hover": {
            color: "accent",
            backgroundColor: "background",
            fontWeight: "bold"
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
