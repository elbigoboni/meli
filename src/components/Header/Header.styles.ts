import styled from "styled-components";
import dsVariables from "../../design-system/variables";

const Box = styled.header`
  background-color: ${dsVariables.colors.gorse};
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
