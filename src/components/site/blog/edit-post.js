/** @jsx jsx */
import { jsx } from "theme-ui";

const EditPost = props => (
  <a
    sx={{
      fontFamily: "body",
      color: "text",
      ":hover": {
        color: "accent"
      }
    }}
    target="_blank"
    rel="noopener noreferrer"
    href={props.editLink}
  >
    {props.children}
  </a>
);

export default EditPost;
