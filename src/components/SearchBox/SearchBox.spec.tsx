import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { SearchBox } from ".";

describe("<SearchBox />", () => {
  beforeEach(() => {
    render(<SearchBox />, { wrapper: MemoryRouter });
  });
  describe("Render", () => {
    test("should render correctly", () => {
      const { container } = render(<SearchBox />, { wrapper: MemoryRouter });
      expect(container).toMatchSnapshot();
    });
  });
});
