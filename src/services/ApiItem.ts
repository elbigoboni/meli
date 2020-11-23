import ProductDetailInteface from "../types/ProductDetail";

export const ApiItem = async (search: string) => {
  const request = await fetch(`http://localhost:4000/api/item/${search}`);
  const json: ProductDetailInteface = await request.json();
  return json;
};
