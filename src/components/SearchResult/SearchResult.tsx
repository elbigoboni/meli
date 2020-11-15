import React from "react";
import Product from "../../types/Product";
import Divider from "../Divider";
import {
  Box,
  Image,
  Title,
  Description,
  Location,
  TextContent,
} from "./SearchResult.styles";

interface SearchResultProps {
  product: Product;
}

export const SearchResult: React.FC<SearchResultProps> = ({ product }) => {
  return (
    <>
      <Box>
        <Image src={product.image.thumb} alt="Imagem" />
        <TextContent>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
        </TextContent>
        <TextContent>
          <Location>{product.location}</Location>
        </TextContent>
      </Box>
      <Divider />
    </>
  );
};
