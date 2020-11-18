import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Routes } from "./Routes";

describe("<Routes />", () => {
  describe("Render", () => {
    test("should render correctly", () => {
      const { container } = render(<Routes />, { wrapper: MemoryRouter });
      expect(container).toMatchSnapshot();
    });
  });
});
