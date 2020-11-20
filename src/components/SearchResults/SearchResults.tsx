import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiItems } from "../../services/ApiItems";
import {
  default as Product,
  default as ProductInteface,
} from "../../types/Product";
import { SearchResult } from "../SearchResult";
import {
  List,
  Loading,
  LoadingMessage,
  LoadingContainer,
} from "./SearchResults.styles";

export const SearchResults = () => {
  const [products, setProducts] = useState<ProductInteface[]>([]);
  const searchTerm: any = useParams();
  const getProducts = async () => {
    const productsJson = await ApiItems(searchTerm.s);
    setProducts(productsJson);
  };
  useEffect(() => {
    setProducts([]);
    getProducts();
  }, [searchTerm]);

  if (!products.length)
    return (
      <LoadingContainer>
        <Loading />
        <LoadingMessage>Carregando. Aguarde, por favor.</LoadingMessage>
      </LoadingContainer>
    );
  return (
    <List>
      {products.map((product: Product) => (
        <SearchResult key={product.item.id} product={product} />
      ))}
    </List>
  );
};
