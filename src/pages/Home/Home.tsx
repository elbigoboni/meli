import React from "react";
import { Wrapper } from "../../components/Wrapper";
import { ShoppingImage } from "./Home.styles";

const PageHome: React.FC = () => {
  return (
    <>
      <Wrapper>
        <ShoppingImage />
      </Wrapper>
    </>
  );
};

export { PageHome };
