/** @jsx jsx */
import { jsx } from "theme-ui";

const PostDate = ({ children }) => (
  <div
    sx={{
      fontFamily: "heading",
      fontSize: ["0.7em", "1em", "1em"],
      marginBottom: ["1em", null, null]
    }}
    className="post-details"
  >
    {children}
  </div>
);

export default PostDate;
