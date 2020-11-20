import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Container, Form, SearchInput } from "./SearchBox.styles";

interface SearchBoxProps {
  placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "Nunca dejes de buscar",
}) => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const onSearchHandler = (e: any) => {
    e.preventDefault();
    history.push(`/items/${query}`);
  };
  return (
    <Form data-testid="search box" onSubmit={onSearchHandler}>
      <Container>
        <SearchInput
          data-testid="search field"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          placeholder={placeholder}
        />
        <Button>GO</Button>
      </Container>
    </Form>
  );
};
export { SearchBox };
