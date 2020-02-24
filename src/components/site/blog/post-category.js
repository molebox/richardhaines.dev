/** @jsx jsx */
import { jsx } from "theme-ui";

const PostCategory = props => (
  <span
    sx={{
      fontFamily: "heading"
    }}
  >
    {props.children}
  </span>
);

export default PostCategory;
