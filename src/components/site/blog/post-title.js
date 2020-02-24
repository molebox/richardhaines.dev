/** @jsx jsx */
import { jsx } from "theme-ui";

const PostTitle = props => (
  <h2
    sx={{
      fontFamily: "heading"
    }}
  >
    {props.children}
  </h2>
);

export default PostTitle;
