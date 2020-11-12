import React from "react";
import { Button, Container, Form, SearchInput } from "./SearchBox.styles";

interface SearchBox {
  onSearch: () => void;
  placeholder?: string;
}

const SearchBox: React.FC<SearchBox> = ({
  onSearch,
  placeholder = "Nunce dejes de buscar",
}) => {
  return (
    <Form onSubmit={onSearch}>
      <Container>
        <SearchInput placeholder={placeholder} />
        <Button>GO</Button>
      </Container>
    </Form>
  );
};
export { SearchBox };
