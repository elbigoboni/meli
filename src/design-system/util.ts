export const asset = (
  imageName: string,
  width: number,
  height: number,
  setWidthAndHeight: boolean = true,
  extension: string = "png",
  imagePath: string = "/images/"
) => {
  let boxSize = "";
  if (setWidthAndHeight) {
    boxSize = `
      width: ${width}px;
      height: ${height}px;
    `;
  }
  return `
    ${boxSize}
    background-image: url(${imagePath}${imageName}.${extension});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: ${width}px ${height}px;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 200dpi){ 
      background-image: url(${imagePath}/${imageName}@2x.${extension});
    }
  `;
};
