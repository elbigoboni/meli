import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Wrapper } from ".";

describe("<Wrapper />", () => {
  describe("Render", () => {
    test("should render correctly", () => {
      const { container } = render(<Wrapper />, { wrapper: MemoryRouter });
      expect(container).toMatchSnapshot();
    });
  });
});
