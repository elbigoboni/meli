import ProductInterface from "../types/Product";

export const ApiItems = async (search: string) => {
  const request = await fetch(`http://localhost:4000/api/items/${search}`);
  const json: ProductInterface[] = await request.json();
  return json;
};
