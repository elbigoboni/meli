import React from "react";
import { Link } from "react-router-dom";
import Product from "../../types/Product";
import { Divider } from "../Divider";
import {
  Box,
  Image,
  Location,
  Price,
  ProductContent,
  Title,
} from "./SearchResult.styles";

interface SearchResultProps {
  product: Product;
}

export const SearchResult: React.FC<SearchResultProps> = ({ product }) => {
  return (
    <Link to={`/item/${product.item.id}`}>
      <Box>
        <Image src={product.item.thumbnail} alt="Imagem" />
        <ProductContent>
          <Price>
            {product.item.price.currency} {product.item.price.amount}
          </Price>
          <Title>{product.item.title}</Title>
        </ProductContent>
        <Location>{"location"}</Location>
      </Box>
      <Divider />
    </Link>
  );
};
