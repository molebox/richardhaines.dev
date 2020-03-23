/** @jsx jsx */
import { jsx } from "theme-ui";

const AllCategory = ({ handleCategoryQuery }) => {
  return (
    <button
      sx={{
        border: "1px solid",
        borderColor: "accent",
        borderRadius: "5px",
        padding: "1em",
        height: "auto",
        minWidth: "6em",
        color: "text",
        fontFamily: "heading",
        fontSize: ["0.8em", "1em", "1em"],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "accent",
          color: "background"
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
      onClick={() => handleCategoryQuery("All")}
    >
      All
    </button>
  );
};

export default AllCategory;
