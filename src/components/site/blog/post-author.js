/** @jsx jsx */
import { jsx } from "theme-ui";

const PostAuthor = props => (
  <p
    sx={{
      fontFamily: "heading"
    }}
  >
    {props.children}
  </p>
);

export default PostAuthor;
