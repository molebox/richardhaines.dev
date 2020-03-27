/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Input = styled.input`
  padding: 0.4em;
`;

const SearchBar = ({ handleSearchQuery }) => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "4em auto"
      }}
    >
      <Input
        sx={{
          color: "greyBlack",
          fontFamily: "body",
          border: "1px solid",
          borderColor: "accent"
        }}
        type="text"
        id="blog-searchbar"
        placeholder="Search posts.."
        onChange={handleSearchQuery}
      />
    </div>
  );
};

export default SearchBar;
