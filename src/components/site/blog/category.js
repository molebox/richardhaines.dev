/** @jsx jsx */
import { jsx } from "theme-ui";

const Category = ({ category, handleCategoryQuery, ...rest }) => {
  return (
    <button
      {...rest}
      sx={{
        border: "1px solid",
        borderColor: "accent",
        borderRadius: "5px",
        padding: "1em",
        height: "auto",
        width: "max-content",
        minWidth: ["3em", "5em", "6em"],
        color: "text",
        fontFamily: "heading",
        fontWeight: "body",
        fontSize: ["0.8em", "1em", "1em"],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "accent",
          color: "background",
          fontWeight: "heading"
        },
        ":active": {
          backgroundColor: "accent",
          color: "background"
        },
        ":focus": {
          backgroundColor: "accent",
          color: "background"
        }
      }}
      onClick={() => handleCategoryQuery(category)}
    >
      {category}
    </button>
  );
};

export default Category;
