/** @jsx jsx */
import { jsx } from "theme-ui";
import PostAuthor from "./post-author";
import PostDate from "./post-date";

const PostInfo = ({ author, category, date }) => {
  return (
    <section
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "1em auto"
      }}
    >
      <PostAuthor>Author: {author}</PostAuthor>
      <PostDate> Posted: {date}</PostDate>
    </section>
  );
};

export default PostInfo;
