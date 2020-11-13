import React from "react";
import { Button, Container, Form, SearchInput } from "./SearchBox.styles";

interface SearchBoxProps {
  onSearch: () => void;
  placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
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
