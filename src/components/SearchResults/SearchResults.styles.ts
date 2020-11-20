import styled from "styled-components";
import dsVariables from "../../design-system/variables";

export const List = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: ${dsVariables.colors.white};
  border-radius: 5px;
`;

export const Loading = styled.img.attrs({
  src: "/images/loading.svg",
})`
  width: 300px;
  margin: 0 auto;
  display: block;
  flex: 0;
`;

export const LoadingMessage = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: ${dsVariables.spaces.medium}px;
  flex: 0;
  color: ${dsVariables.colors.dustyGray};
`;

export const LoadingContainer = styled.div`
  height: 82vh;
  margin-top: ${dsVariables.spaces.medium}px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;
