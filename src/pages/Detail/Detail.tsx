import React from "react";
import { ProductDetail } from "../../components/ProductDetail";
import { Wrapper } from "../../components/Wrapper";

const PageDetail: React.FC = () => {
  return (
    <>
      <Wrapper>
        <ProductDetail productId={"MLA847744939"} />
      </Wrapper>
    </>
  );
};

export { PageDetail };
