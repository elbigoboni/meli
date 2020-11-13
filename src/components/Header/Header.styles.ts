import styled from "styled-components";
import variables from "../../design-system/variables";

const Box = styled.header`
  background-color: ${variables.colors.gorse};
  padding: 10px;
`;

const Logo = styled.img`
  width: 50px;
  flex: 0;
  margin-right: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

export { Box, Logo, Row };
