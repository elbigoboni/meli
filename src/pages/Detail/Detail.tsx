import React from "react";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../../components/ProductDetail";
import Wrapper from "../../components/Wrapper";
import { products } from "../../mocks/ProductList";
import Product from "../../types/Product";

const Detail: React.FC = () => {
  const { slug }: any = useParams();
  const product = products.find(
    (productItem: Product) => productItem.slug === slug
  );
  return (
    <>
      <Wrapper>
        <ProductDetail product={product} />
      </Wrapper>
    </>
  );
};

export { Detail };
