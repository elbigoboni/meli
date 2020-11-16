import React from "react";
import { Link } from "react-router-dom";
import Product from "../../types/Product";
import Divider from "../Divider";
import {
  Box,
  Image,
  Title,
  Description,
  Location,
  ProductContent,
  Price,
} from "./SearchResult.styles";

interface SearchResultProps {
  product: Product;
}

export const SearchResult: React.FC<SearchResultProps> = ({ product }) => {
  return (
    <Link to={`/produto/${product.slug}`}>
      <Box>
        <Image src={product.image.thumb} alt="Imagem" />
        <ProductContent>
          <Price>{product.price}</Price>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
        </ProductContent>
        <Location>{product.location}</Location>
      </Box>
      <Divider />
    </Link>
  );
};
