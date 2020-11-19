export default interface Product {
  author: {
    name: string;
  };
  item: {
    id: string;
    title: string;
    categories: any;
    thumbnail: string;
    price: {
      amount: number;
      currency: string;
    };
    location: string;
    condition: string;
    free_shipping: boolean;
  };
}
