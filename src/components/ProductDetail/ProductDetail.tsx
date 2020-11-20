import React, { useEffect, useState } from "react";
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
  const [loaded, setLoaded] = useState(false);
  const [product, setProduct] = useState({
    author: {},
    item: {
      id: "MLA847744939",
      title: "Macbook Pro 16 I9 8cores Ssd1tb 16gb Video 4gb Grtia. Factu",
      categories: ["cat1", "cat2"],
      thumbnail:
        "http://http2.mlstatic.com/D_615255-MLA41360105446_042020-O.jpg",
      price: {
        amount: 699999,
        currency: "ARS",
      },
      condition: "new",
      free_shipping: true,
      location: "Capital Federal",
    },
  });

  const getProducts = async () => {
    // const productsJson = await ApiItems(productId);
    // const productFiltered: any = productsJson.find(
    // (productItem: ProductInteface) => productItem.item.id
    // );
    // setProduct(productFiltered);
    // setProduct();
    setLoaded(true);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (!loaded) return <></>;
  return (
    <>
      <Breadcrumb
        path={[
          "Eletrônica, Audio y Video",
          "iPod",
          "Reproductores",
          "iPod touch",
          "32gb",
        ]}
      />
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
