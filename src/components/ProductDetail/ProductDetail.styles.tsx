import styled from "styled-components";
import { gutter, gutterSize, span, spanNarrow } from "../../design-system/grid";
import dsVariables from "../../design-system/variables";

export const Box = styled.div`
  background-color: white;
  padding: ${dsVariables.spaces.medium}px;
  margin-top: ${dsVariables.spaces.small}px;
  border-radius: 4px;
`;

export const Intro = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${dsVariables.spaces.medium}px;
`;

export const Extra = styled.span`
  font-size: 14px;
  margin-bottom: ${dsVariables.spaces.small}px;
  display: block;
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
  flex-basis: ${spanNarrow(7)};
  margin-right: ${gutter()};
  margin-bottom: ${dsVariables.spaces.small * 4}px;
`;

export const ProductContainer = styled.div`
  flex-basis: ${span(3)};
`;

export const DescriptionContainer = styled.div`
  width: ${spanNarrow(7)};
  margin-right: ${gutter()};
`;

export const Image = styled.img`
  max-width: 100%;
`;
