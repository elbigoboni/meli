import styled from "styled-components";
import dsVariables from "../../design-system/variables";

export const Box = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${dsVariables.spaces.small}px;
  align-items: flex-start;
  padding-top: ${dsVariables.spaces.small}px;
`;

export const Image = styled.img`
  border-radius: 5px;
  margin-right: ${dsVariables.spaces.small}px;
  flex: 0;
  width: 170px;
  height: 170px;
  margin-top: -${dsVariables.spaces.small}px;
  object-fit: contain;
  margin-left: ${dsVariables.spaces.small}px;
`;

export const Title = styled.h3`
  font-size: 18px;
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: justify;
`;

export const Location = styled.span`
  font-size: 12px;
  padding-left: 100px;
  padding-right: 200px;
  color: ${dsVariables.colors.dustyGray};
  flex: 0;
  width: 5%;
  white-space: nowrap;
`;

export const Price = styled.p`
  font-size: 24px;
  margin-bottom: ${dsVariables.spaces.medium}px;
`;

export const ProductContent = styled.div`
  flex: 1;
`;
