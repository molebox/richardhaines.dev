/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
`;

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
        margin: "2em auto"
      }}
    >
      <Input
        sx={{
          color: "greyBlack",
          fontFamily: "body",
          border: "2px solid",
          borderColor: "background"
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
