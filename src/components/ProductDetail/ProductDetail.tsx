import React, { useEffect, useState } from "react";
import { ApiItem } from "../../services/ApiItem";
import ProductDetailInteface from "../../types/ProductDetail";
import { Breadcrumb } from "../Breadcrumb";
import { Button } from "../Button";
import { Currency } from "../Currency";
import {
  Box,
  Description,
  DescriptionContainer,
  DescriptionTitle,
  Extra,
  Image,
  ImageContainer,
  Intro,
  Price,
  ProductContainer,
  Title,
} from "./ProductDetail.styles";

type ProductDetailProps = {
  productId: string;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const [product, setProduct] = useState<ProductDetailInteface | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      const productJson = await ApiItem(productId);
      setProduct(productJson);
    };
    getProduct();
  }, []);

  if (!(product && product.item)) return <></>;
  return (
    <>
      <Breadcrumb path={product.item.categories} />
      <Box>
        <Intro>
          <ImageContainer>
            <Image src={product.item.thumbnail} />
          </ImageContainer>
          <ProductContainer>
            <Extra>
              {product.item.condition} - {product.sold_quantity} vendidos
            </Extra>
            <Title>{product.item.title}</Title>
            <Price>
              <Currency
                currency={product.item.price.currency}
                value={product.item.price.amount}
              />
            </Price>
            <Button>Comprar</Button>
          </ProductContainer>
        </Intro>
        <DescriptionContainer>
          <DescriptionTitle>Descripción del producto</DescriptionTitle>
          <Description>{product.description}</Description>
        </DescriptionContainer>
      </Box>
    </>
  );
};
export { ProductDetail };
