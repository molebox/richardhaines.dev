/** @jsx jsx */
import { jsx } from "theme-ui";

const PostDate = props => (
  <span
    sx={{
      fontFamily: "heading",
      fontSize: ["0.7em", "1em", "1em"],
      marginBottom: ["1em", null, null]
    }}
  >
    {props.children}
  </span>
);

export default PostDate;
