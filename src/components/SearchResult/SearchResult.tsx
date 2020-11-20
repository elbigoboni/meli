import React from "react";
import { Link } from "react-router-dom";
import Product from "../../types/Product";
import { Currency } from "../Currency";
import { Divider } from "../Divider";
import {
  Box,
  Image,
  Location,
  Price,
  ProductContent,
  Title,
  ImageContent,
} from "./SearchResult.styles";

interface SearchResultProps {
  product: Product;
}

export const SearchResult: React.FC<SearchResultProps> = ({ product }) => {
  return (
    <Link to={`/item/${product.item.id}`}>
      <Box>
        <ImageContent>
          <Image src={product.item.thumbnail} alt="Imagem" />
        </ImageContent>
        <ProductContent>
          <Price>
            <Currency
              currency={product.item.price.currency}
              value={product.item.price.amount}
            />
          </Price>
          <Title>{product.item.title}</Title>
        </ProductContent>
        <Location>{product.item.location}</Location>
      </Box>
      <Divider />
    </Link>
  );
};
