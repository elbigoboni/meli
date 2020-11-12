import styled from "styled-components";

const Form = styled.form`
  background-color: white;
  display: flex;
  flex: 1;
  align-items: center;
`;

const SearchInput = styled.input`
  border: 0;
  flex: 1;
  font-size: 20px;
  padding: 10px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  background-color: #eeeeee;
  color: black;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export { Form, SearchInput, Button, Container };
