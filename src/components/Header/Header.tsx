import React from "react";
import { Link } from "react-router-dom";
import { SearchBox } from "../SearchBox";
import Wrapper from "../Wrapper";
import { Box, Logo, Row } from "./Header.styles";

function Header() {
  return (
    <Box>
      <Wrapper>
        <Row>
          <Link to="/">
            <Logo src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.10.4/mercadolibre/logo__small@2x.png" />
          </Link>
          <SearchBox onSearch={() => alert("olar")} />
        </Row>
      </Wrapper>
    </Box>
  );
}

export default Header;
