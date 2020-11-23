import ProductInterface from "../types/Product";

export const ApiItem = async (search: string) => {
  const request = await fetch(`http://localhost:4000/api/item/${search}`);
  const json: ProductInterface[] = await request.json();
  return json;
};
