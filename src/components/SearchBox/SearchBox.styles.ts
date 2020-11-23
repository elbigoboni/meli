import styled from "styled-components";
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
  width: 50px;
  height: 50px;
  border: 0;
  color: black;
  cursor: pointer;
  background: url(/images/ic_Search@2x.png) no-repeat center center;
  background-color: ${dsVariables.colors.gallery};
  background-size: 20px 20px;
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
