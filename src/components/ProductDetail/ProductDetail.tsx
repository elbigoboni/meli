import React from "react";
import Product from "../../types/Product";
import { Button } from "../Button";
import {
  Title,
  Price,
  DescriptionTitle,
  Description,
  Image,
  Box,
  ImageContainer,
  ProductContainer,
  DescriptionContainer,
} from "./ProductDetail.styles";

type ProductDetailProps = {
  product?: Product;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => (
  <Box>
    <ImageContainer>
      <Image src={product?.image.full} />
    </ImageContainer>
    <ProductContainer>
      <Title>{product?.title}</Title>
      <Price>{product?.price}</Price>
      <Button>Comprar</Button>
    </ProductContainer>
    <DescriptionContainer>
      <DescriptionTitle>Descripción del producto</DescriptionTitle>
      <Description>{product?.description}</Description>
    </DescriptionContainer>
  </Box>
);

export { ProductDetail };
