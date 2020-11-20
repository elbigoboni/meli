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
  border-bottom: 4px solid ${dsVariables.colors.white};
  cursor: pointer;
  border: 0;
  &:focus,
  &:hover {
    filter: brightness(110%);
    border-bottom: 4px solid ${dsVariables.colors.mariner};
  }
  &:active {
    transform: scale(0.95);
  }
`;
