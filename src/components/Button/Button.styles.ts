import styled from "styled-components";
import dsVariables from "../../design-system/variables";

export const Button = styled.button`
  padding: 15px 25px;
  display: block;
  width: 250px;
  font-size: 20px;
  color: white;
  border-radius: 5px;
  background: ${dsVariables.colors.dodgerBlue};
  cursor: pointer;
`;
