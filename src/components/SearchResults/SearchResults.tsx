import React from "react";
import { products } from "../../mocks/ProductList";
import { SearchResult } from "../SearchResult";
import { List } from "./SearchResults.styles";

export const SearchResults = () => (
  <List>
    {products.map((product) => (
      <SearchResult key={product.slug} product={product} />
    ))}
  </List>
);
