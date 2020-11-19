export const ApiItems = async () => {
  const request = await fetch("http://localhost:4000/api/items/formato");
  const json = await request.json();
  return json;
};
