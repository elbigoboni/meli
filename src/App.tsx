import React from "react";
import { Header } from "./components/Header";
import { SearchResults } from "./components/SearchResults";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <SearchResults />
      </Wrapper>
    </>
  );
}

export default App;
