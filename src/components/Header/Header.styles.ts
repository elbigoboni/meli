import styled from "styled-components";
import { asset } from "../../design-system/util";
import dsVariables from "../../design-system/variables";

const Box = styled.header`
  background-color: ${dsVariables.colors.gorse};
  padding: 10px;
`;

const Logo = styled.div`
  flex: 0;
  margin-right: 20px;
  ${asset("Logo_ML", 53, 36)}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

export { Box, Logo, Row };
