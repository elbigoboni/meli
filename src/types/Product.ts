export default interface Product {
  title: string;
  slug: string;
  description: string;
  price: string;
  location: string;
  image: {
    full: string;
    thumb: string;
  };
}
