import React from "react";
import { ProductDetail } from "../../components/ProductDetail";
import Wrapper from "../../components/Wrapper";

const Detail: React.FC = () => {
  return (
    <>
      <Wrapper>
        <ProductDetail
          image="//placeimg.com/680/680"
          price="1350"
          title="Titulo do Produto"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iusto cupiditate labore impedit eum reprehenderit dolore cum quia repudiandae minus nihil numquam natus, eaque saepe non, incidunt assumenda sit voluptate tempora quidem?"
        />
      </Wrapper>
    </>
  );
};

export { Detail };
