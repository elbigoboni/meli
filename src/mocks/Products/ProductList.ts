import ProductInteface from "../../types/Product";
import ProductDetailInteface from "../../types/ProductDetail";

export const ProductsListMock: ProductInteface[] = [
  {
    author: {
      name: "Author xyz",
    },
    item: {
      id: "ml1762712761",
      title: "macbook",
      categories: ["cat1", "cat2"],
      thumbnail: "string",
      price: {
        amount: 1200,
        currency: "ARS",
      },
      location: "Buenos Aires",
      condition: "new",
      free_shipping: true,
    },
  },
  {
    author: {
      name: "Author xyz2",
    },
    item: {
      id: "ml8718728712",
      title: "ipad",
      categories: ["cat1", "cat2"],
      thumbnail: "string",
      price: {
        amount: 500,
        currency: "ARS",
      },
      location: "San Francisco",
      condition: "new",
      free_shipping: true,
    },
  },
];

export const ProductDetailMock: ProductDetailInteface = {
  author: {
    name: "Author xyz",
  },
  description: "desc xyz",
  item: {
    id: "ml1762712761",
    title: "macbook",
    categories: ["cat1", "cat2"],
    thumbnail: "string",
    price: {
      amount: 1200,
      currency: "ARS",
    },
    location: "Buenos Aires",
    condition: "new",
    free_shipping: true,
  },
  sold_quantity: 12,
};
