/** @jsx jsx */
import { jsx } from "theme-ui";

const PostAuthor = props => (
  <p
    sx={{
      fontFamily: "heading",
      fontSize: ["0.7em", "1em", "1em"],
      marginBottom: ["1em", null, null]
    }}
  >
    {props.children}
  </p>
);

export default PostAuthor;
