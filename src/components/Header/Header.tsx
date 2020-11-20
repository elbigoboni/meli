import React from "react";
import { Link } from "react-router-dom";
import { SearchBox } from "../SearchBox";
import { Wrapper } from "../Wrapper";
import { Box, Logo, Row } from "./Header.styles";

const Header: React.FC = () => (
  <Box>
    <Wrapper>
      <Row>
        <Link to="/" data-testid="link to home">
          <Logo data-testid="logo" src="/images/Logo_ML@2x.png" />
        </Link>
        <SearchBox />
      </Row>
    </Wrapper>
  </Box>
);

export default Header;
