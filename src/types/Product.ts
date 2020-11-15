export default interface Product {
  title: string;
  slug: string;
  description: string;
  price: number;
  location: string;
  image: {
    full: string;
    thumb: string;
  };
}
