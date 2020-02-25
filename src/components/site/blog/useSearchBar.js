import React from "react";

export const useSearchBar = data => {
  const allPosts = data.allMdx.nodes;
  const emptyQuery = "";
  const [searchQuery, setSearchQuery] = React.useState({
    filteredData: [],
    query: emptyQuery
  });

  const handleSearchQuery = e => {
    const query = e.target.value;

    const posts = data.allMdx.nodes || [];

    const filteredData = posts.filter(post => {
      const { title } = post.frontmatter;
      return title.toLowerCase().includes(query.toLowerCase());
    });

    setSearchQuery({ filteredData, query });
  };

  const { filteredData, query } = searchQuery;
  const hasSearchResult = filteredData && query !== emptyQuery;
  const posts = hasSearchResult ? filteredData : allPosts;

  return { posts, handleSearchQuery };
};
