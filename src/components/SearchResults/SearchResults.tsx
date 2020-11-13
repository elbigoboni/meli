import React from "react";
import { SearchResult } from "../SearchResult";
import { List } from "./SearchResults.styles";

const SearchResults = () => {
  return (
    <List>
      <SearchResult />
      <SearchResult />
      <SearchResult />
    </List>
  );
};

export { SearchResults };
