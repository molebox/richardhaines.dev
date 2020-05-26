/** @jsx jsx */
import { jsx } from "theme-ui";

const PostTitle = ({ children }) => (
  <h2
    sx={{
      fontFamily: "heading"
    }}
  >
    {children}
  </h2>
);

export default PostTitle;
