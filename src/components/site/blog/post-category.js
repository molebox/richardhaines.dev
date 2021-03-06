/** @jsx jsx */
import { jsx } from "theme-ui";

const PostCategory = ({ children }) => (
  <span
    sx={{
      fontFamily: "heading",
      fontSize: ["0.7em", "1em", "1em"]
    }}
  >
    {children}
  </span>
);

export default PostCategory;
