import ProductInteface from "./Product";

export default interface ProductDetailInteface extends ProductInteface {
  description: string;
  sold_quantity: number;
}
