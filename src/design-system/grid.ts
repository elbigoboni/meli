export const gutterSize = 16;
const gridSizeDefault = 10;

const getSpanSize = (size: number, gridSize: number) => (size / gridSize) * 100;

export const span = (
  size: number,
  gridSize: number = gridSizeDefault
): string => {
  return `calc(${getSpanSize(size, gridSize)}%)`;
};

export const spanNarrow = (
  size: number,
  gridSize: number = gridSizeDefault
): string => {
  return `calc(${getSpanSize(size, gridSize)}% - ${gutterSize}px)`;
};

export const spanFull = (
  size: number,
  gridSize: number = gridSizeDefault
): string => {
  return `calc(${getSpanSize(size, gridSize)}% + ${gutterSize}px)`;
};

export const gutter = () => {
  return `${gutterSize}px`;
};
