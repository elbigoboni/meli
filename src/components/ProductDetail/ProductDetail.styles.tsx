import styled from "styled-components";
import { span } from "../../design-system/grid";
import dsVariables from "../../design-system/variables";

export const Box = styled.div`
  background-color: white;
  padding: ${dsVariables.spaces.medium}px;
  margin-top: ${dsVariables.spaces.small}px;
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${dsVariables.spaces.medium}px;
`;

export const Price = styled.p`
  font-size: 46px;
  margin-bottom: ${dsVariables.spaces.medium}px;
  white-space: nowrap;
`;

export const DescriptionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: ${dsVariables.spaces.medium}px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${dsVariables.colors.dustyGray};
  line-height: 1.5;
`;

export const ImageContainer = styled.div`
  width: 70%;
  margin-bottom: ${dsVariables.spaces.small * 4}px;
  margin-right: ${dsVariables.spaces.small}px;
`;

export const ProductContainer = styled.div`
  width: ${span(3, 10, dsVariables.spaces.small)};
`;

export const DescriptionContainer = styled.div`
  width: ${span(7)};
  margin-right: ${dsVariables.spaces.small}px;
`;

export const Image = styled.img`
  max-width: 100%;
`;
