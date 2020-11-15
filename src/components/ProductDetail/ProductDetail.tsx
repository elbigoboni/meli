import React from "react";
import { Button } from "../Button";
import {
  Title,
  Price,
  DescriptionTitle,
  Description,
  Image,
  Box,
} from "./ProductDetail.styles";

type ProductDetailProps = {
  title: string;
  description: string;
  price: string;
  image: string;
};

const ProductDetail: React.FC<ProductDetailProps> = ({
  title,
  description,
  price,
  image,
}) => (
  <Box>
    <Image src={image} />
    <Title>{title}</Title>
    <Price>{price}</Price>
    <Button>Comprar</Button>

    <DescriptionTitle>Descripción del producto</DescriptionTitle>
    <Description>{description}</Description>
  </Box>
);

export { ProductDetail };
