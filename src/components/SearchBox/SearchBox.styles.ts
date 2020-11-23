import styled from "styled-components";
import { asset } from "../../design-system/util";
import dsVariables from "../../design-system/variables";

const Form = styled.form`
  background-color: white;
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  &:focus-within {
    transform: scale(0.99);
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1),
      0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  }
`;

const SearchInput = styled.input.attrs({
  type: "text",
})`
  border: 0;
  flex: 1;
  font-size: 18px;
  padding: 10px;
  background: ${dsVariables.colors.transparent};
`;

const Button = styled.button`
  ${asset("ic_search", 20, 20, false)}
  width: 50px;
  height: 50px;
  border: 0;
  color: black;
  cursor: pointer;
  background-color: ${dsVariables.colors.gallery};
  font-size: 0px;
  &:focus,
  &:hover {
    background-color: ${dsVariables.colors.white};
    color: ${dsVariables.colors.white};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export { Form, SearchInput, Button, Container };
