import React, { useEffect, useState } from "react";
import { ApiItems } from "../../services/ApiItems";
import Product from "../../types/Product";
import { SearchResult } from "../SearchResult";
import { List } from "./SearchResults.styles";

export const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const productsJson = await ApiItems();
    setProducts(productsJson);
  };
  useEffect(() => {
    getProducts();
  }, []);
  if (!products) return <></>;
  return (
    <List>
      {products.map((product: Product) => (
        <SearchResult key={product.item.id} product={product} />
      ))}
    </List>
  );
};
