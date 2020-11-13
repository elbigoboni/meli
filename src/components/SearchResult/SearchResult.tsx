import React from "react";
import Divider from "../Divider";
import {
  Box,
  Image,
  Title,
  Description,
  Location,
  TextContent,
} from "./SearchResult.styles";

const SearchResult: React.FC = () => {
  return (
    <>
      <Box>
        <Image src="//placeimg.com/175/175" alt="" />
        <TextContent>
          <Title>Lorem, ipsum dolor.</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit
            velit modi atque optio illum error quod facere animi hic?
          </Description>
        </TextContent>
        <TextContent>
          <Location>Lorem, ipsum dolor.</Location>
        </TextContent>
      </Box>
      <Divider />
    </>
  );
};

export { SearchResult };
