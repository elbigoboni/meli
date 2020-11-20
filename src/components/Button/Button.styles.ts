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
  border: 0;
  &:focus,
  &:hover {
    filter: brightness(120%);
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1),
      0px 1px 10px 0px rgba(0, 0, 0, 0.1);
    transform: scale(0.99);
  }
`;
