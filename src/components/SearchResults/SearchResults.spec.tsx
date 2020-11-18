import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { SearchResults } from ".";

describe("<SearchResults />", () => {
  describe("Render", () => {
    test("should render correctly", () => {
      const { container } = render(<SearchResults />, {
        wrapper: MemoryRouter,
      });
      expect(container).toMatchSnapshot();
    });
  });
});
