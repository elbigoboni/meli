export const span = (
  size: number,
  gridSize: number = 10,
  gutter: number = 0
): string => {
  const total = (size / gridSize) * 100;
  return `calc(${total}% - ${gutter}px)`;
};
