import { render } from "@testing-library/react";
import React from "react";
import { ProductDetailMock } from "../../mocks/Products/ProductList";
import { ProductDetail } from ".";

describe("<ProductDetail />", () => {
  describe("Render", () => {
    test("should render correctly", () => {
      const { container } = render(
        <ProductDetail product={ProductDetailMock} />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
