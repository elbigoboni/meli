import styled from "styled-components";
import { span } from "../../design-system/grid";
import dsVariables from "../../design-system/variables";

export const Box = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${dsVariables.spaces.small}px;
  align-items: flex-start;
  padding-top: ${dsVariables.spaces.small}px;
`;

export const ImageContent = styled.div`
  width: ${span(2)};
  margin-right: ${dsVariables.spaces.small}px;
  margin-top: -${dsVariables.spaces.small}px;
  margin-left: ${dsVariables.spaces.small}px;
`;

export const Image = styled.img`
  border-radius: 5px;
  flex: 0;
  width: 170px;
  height: 170px;
  object-fit: contain;
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
  width: ${span(2)};
  white-space: nowrap;
`;

export const Price = styled.p`
  font-size: 24px;
  margin-bottom: ${dsVariables.spaces.medium}px;
`;

export const ProductContent = styled.div`
  flex: 1;
`;
