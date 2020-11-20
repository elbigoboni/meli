export const ApiItems = async (search: string) => {
  const request = await fetch(
    `http://localhost:4000/api/items/formato?s=${search}`
  );
  const json = await request.json();
  return json;
};
