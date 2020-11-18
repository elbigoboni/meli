import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { SearchResult } from ".";
import { products } from "../../mocks/ProductList";

describe("<SearchResult />", () => {
  describe("Render", () => {
    test("should render correctly", () => {
      const { container } = render(<SearchResult product={products[0]} />, {
        wrapper: MemoryRouter,
      });
      expect(container).toMatchSnapshot();
    });
  });
});
