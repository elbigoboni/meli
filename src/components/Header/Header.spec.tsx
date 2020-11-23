import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from ".";
import { MemoryRouter } from "react-router-dom";

describe("<Header />", () => {
  beforeEach(() => {
    render(<Header />, { wrapper: MemoryRouter });
  });
  describe("Render", () => {
    test("should render correctly", () => {
      const { container } = render(<Header />, { wrapper: MemoryRouter });
      expect(container).toMatchSnapshot();
    });
    test("should render link to home", () => {
      const linkElement = screen.getByTestId("link to home");
      expect(linkElement).toBeInTheDocument();
    });
    test("should render link to home with path to '/'", () => {
      const linkElement = screen.getByTestId("link to home");
      expect(linkElement).toHaveAttribute("href", "/");
    });
    test("should render <SearchBox />", () => {
      const searchBox = screen.getByTestId("search box");
      expect(searchBox).toBeInTheDocument();
    });
  });
});
