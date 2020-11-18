import { render } from "@testing-library/react";
import React from "react";
import { ProductDetail } from ".";
import { products } from "../../mocks/ProductList";

describe("<ProductDetail />", () => {
  describe("Render", () => {
    test("should render correctly", () => {
      const { container } = render(<ProductDetail product={products[0]} />);
      expect(container).toMatchSnapshot();
    });
  });
});
