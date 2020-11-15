import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Form, SearchInput } from "./SearchBox.styles";

interface SearchBoxProps {
  onSearch: () => void;
  placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  onSearch,
  placeholder = "Nunce dejes de buscar",
}) => {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const onSearchHandler = (e: any) => {
    e.preventDefault();
    history.push(`/resultados/${query}`);
  };
  return (
    <Form onSubmit={onSearchHandler}>
      <Container>
        <SearchInput
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
        />
        <Button>GO</Button>
      </Container>
    </Form>
  );
};
export { SearchBox };
