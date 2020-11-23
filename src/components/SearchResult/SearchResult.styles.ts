import styled from "styled-components";
import { spanNarrow, span, gutter, spanFull } from "../../design-system/grid";
import { asset } from "../../design-system/util";
import dsVariables from "../../design-system/variables";

export const Box = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  padding-bottom: ${dsVariables.spaces.small}px;
  padding-top: ${dsVariables.spaces.small}px;
  border-radius: 5px;
  will-change: box-shadow, transform, background;
  &:hover {
    background: white;
    transform: scale(0.97);
    box-shadow: 0px 5px 100px 0px rgba(0, 0, 0, 0.1),
      0px 10px 10px 0px rgba(0, 0, 0, 0.05);
  }
`;

export const ImageContent = styled.div`
  flex-basis: ${spanNarrow(2)};
  margin-right: ${gutter};
  margin-top: -${dsVariables.spaces.small}px;
  margin-left: ${dsVariables.spaces.small}px;
`;

export const Image = styled.img`
  border-radius: 4px;
  flex: 0;
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin-top: ${dsVariables.spaces.small}px;
`;

export const Title = styled.h3`
  font-size: 18px;
  width: 80%;
`;

export const Location = styled.span`
  font-size: 12px;
  color: ${dsVariables.colors.dustyGray};
  flex: 0;
  white-space: nowrap;
  flex-basis: ${span(2)};
`;

export const FreeShipping = styled.div`
  ${asset("ic_shipping", 18, 18)}
  margin-left: ${dsVariables.spaces.small / 2}px;
`;

export const Price = styled.span`
  font-size: 25px;
  margin-bottom: ${dsVariables.spaces.medium}px;
  display: flex;
  align-items: center;
`;

export const ProductContent = styled.div`
  flex-basis: ${span(4)};
  margin-right: ${spanFull(2)};
`;
