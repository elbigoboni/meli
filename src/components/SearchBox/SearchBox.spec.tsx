import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SearchBox } from ".";
import { MemoryRouter, useHistory } from "react-router-dom";

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
