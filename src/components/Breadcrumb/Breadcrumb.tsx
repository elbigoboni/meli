import React from "react";
import { Breadcrumb as Box, Bold } from "./Breadcrumb.styles";

interface BreadcrumbProps {
  path: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
  let pieces: string[] | string;
  const separator = " › ";

  pieces = path.slice(0, path.length - 1);
  pieces = pieces.join(separator);

  const lastPart = path[path.length - 1];

  return (
    <Box>
      {pieces} {separator} <Bold>{lastPart}</Bold>
    </Box>
  );
};

export default Breadcrumb;
