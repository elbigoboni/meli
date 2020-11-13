import React from "react";
import { Header } from "../../components/Header";
import { SearchResults } from "../../components/SearchResults";
import Wrapper from "../../components/Wrapper";

const Home: React.FC = () => {
  return (
    <>
      <Wrapper>
        <SearchResults />
      </Wrapper>
    </>
  );
};

export { Home };
