import React from "react";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../../components/ProductDetail";
import { Wrapper } from "../../components/Wrapper";
import Product from "../../types/Product";

const Detail: React.FC = () => {
  return (
    <>
      <Wrapper>
        <ProductDetail productId={"MLA847744939"} />
      </Wrapper>
    </>
  );
};

export { Detail };
