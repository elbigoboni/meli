import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { SearchResult } from ".";
import { ProductDetailMock } from "../../mocks/Products/ProductList";

describe("<SearchResult />", () => {
  describe("Render", () => {
    test("should render correctly", () => {
      const { container } = render(
        <SearchResult product={ProductDetailMock} />,
        {
          wrapper: MemoryRouter,
        }
      );
      expect(container).toMatchSnapshot();
    });
  });
});
