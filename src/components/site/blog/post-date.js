/** @jsx jsx */
import { jsx } from "theme-ui";

const PostDate = props => (
  <span
    sx={{
      fontFamily: "heading"
    }}
  >
    {props.children}
  </span>
);

export default PostDate;
