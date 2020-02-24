/** @jsx jsx */
import { jsx } from "theme-ui";
import PostAuthor from "./post-author";
import PostCategory from "./post-category";
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
      <PostCategory> Category: {category}</PostCategory>
      <PostDate> Posted: {date}</PostDate>
    </section>
  );
};

export default PostInfo;
