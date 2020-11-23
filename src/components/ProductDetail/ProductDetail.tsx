import React, { useEffect, useState } from "react";
import { ApiItem } from "../../services/ApiItem";
import { Breadcrumb } from "../Breadcrumb";
import { Button } from "../Button";
import { Currency } from "../Currency";
import {
  Box,
  Description,
  DescriptionContainer,
  DescriptionTitle,
  Image,
  ImageContainer,
  Price,
  ProductContainer,
  Title,
} from "./ProductDetail.styles";

type ProductDetailProps = {
  productId: string;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const [product, setProduct] = useState<any>({});

  const getProducts = async () => {
    const productsJson = await ApiItem(productId);
    console.log(productsJson);
    setProduct(productsJson);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (!(product && product.item)) return <></>;
  return (
    <>
      <Breadcrumb path={product.item.categories} />
      <Box>
        <ImageContainer>
          <Image src={product.item.thumbnail} />
        </ImageContainer>
        <ProductContainer>
          <Title>{product.item.title}</Title>
          <Price>
            <Currency
              currency={product.item.price.currency}
              value={product.item.price.amount}
            ></Currency>
          </Price>
          <Button>Comprar</Button>
        </ProductContainer>
        <DescriptionContainer>
          <DescriptionTitle>Descripción del producto</DescriptionTitle>
          <Description>
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos in, voluptatem ducimus tenetur ipsum exercitationem beatae, quis mollitia eligendi repellat unde. Eius suscipit illo facere ex error accusantium quia voluptate, odit necessitatibus totam voluptatum repudiandae eum? Asperiores doloribus tempore fugiat nemo unde amet exercitationem quo cumque quam provident saepe, eum dolore adipisci beatae ab id optio molestiae eaque accusamus, quaerat, quibusdam perferendis! Excepturi aperiam recusandae ad culpa odio qui aliquam, earum saepe? Omnis qui adipisci eos placeat modi expedita animi, neque, inventore, dolorum doloremque a esse non voluptatum sint eius eligendi natus tenetur mollitia quidem voluptas odio delectus tempora?"
            }
          </Description>
        </DescriptionContainer>
      </Box>
    </>
  );
};
export { ProductDetail };
