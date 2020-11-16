import styled from "styled-components";
import variables from "../../design-system/variables";

export const Box = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  align-items: flex-start;
  padding-top: 20px;
`;

export const Image = styled.img`
  border-radius: 5px;
  margin-right: 20px;
  flex: 0;
  width: 170px;
  height: 170px;
  margin-top: -20px;
  object-fit: contain;
`;

export const Title = styled.h3`
  font-size: 16px;
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: justify;
`;

export const Location = styled.span`
  font-size: 10px;
  padding-left: 100px;
  padding-right: 200px;
  color: ${variables.colors.dustyGray};
  flex: 0;
  width: 5%;
  white-space: nowrap;
`;

export const Price = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ProductContent = styled.div`
  flex: 1;
`;
