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
    <Form className="SearchBox" onSubmit={onSearch}>
      <Container>
        <SearchInput
          placeholder={placeholder}
          className="SearchBox--input"
          type="text"
        />
        <Button className="SearchBox--button">
          <span>GO</span>
        </Button>
      </Container>
    </Form>
  );
};
export { SearchBox };
