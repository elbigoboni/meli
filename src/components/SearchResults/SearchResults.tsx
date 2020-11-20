import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiItems } from "../../services/ApiItems";
import Product from "../../types/Product";
import { SearchResult } from "../SearchResult";
import { List } from "./SearchResults.styles";

export const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const searchTerm: any = useParams();
  const getProducts = async () => {
    const productsJson = await ApiItems(searchTerm.s);
    setProducts(productsJson);
  };
  useEffect(() => {
    setProducts([]);
    getProducts();
  }, [searchTerm]);

  if (!products.length) return <List>carregando!</List>;
  return (
    <List>
      {products.map((product: Product) => (
        <SearchResult key={product.item.id} product={product} />
      ))}
    </List>
  );
};
