import styled from "styled-components";
import { span } from "../../design-system/grid";
import dsVariables from "../../design-system/variables";

export const Box = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  padding-bottom: ${dsVariables.spaces.small}px;
  padding-top: ${dsVariables.spaces.small}px;
  border-radius: 5px;
  &:hover {
    background: white;
    transform: scale(1.07);
    box-shadow: 0px 5px 200px 0px rgba(0, 0, 0, 0.1),
      0px 10px 100px 0px rgba(0, 0, 0, 0.1);
  }
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
  margin-top: ${dsVariables.spaces.small}px;
`;

export const Title = styled.h3`
  font-size: 18px;
  width: 80%;
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

export const FreeShipping = styled.img.attrs({
  src: "/images/ic_shipping@2x.png",
})`
  width: 22px;
  margin-left: ${dsVariables.spaces.small / 2}px;
`;

export const Price = styled.p`
  font-size: 25px;
  margin-bottom: ${dsVariables.spaces.medium}px;
  display: flex;
  align-items: center;
`;

export const ProductContent = styled.div`
  flex: 1;
`;
