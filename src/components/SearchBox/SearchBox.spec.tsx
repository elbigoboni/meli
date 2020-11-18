import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Router } from "react-router-dom";
import { SearchBox } from ".";

describe("<SearchBox />", () => {
  describe("Render", () => {
    beforeEach(() => {
      render(<SearchBox />, { wrapper: MemoryRouter });
    });
    test("should render correctly", () => {
      const { container } = render(<SearchBox />, { wrapper: MemoryRouter });
      expect(container).toMatchSnapshot();
    });
  });
  describe("Behaviour", () => {
    describe("when searching", () => {
      let historyMock: any;
      let form: HTMLElement;
      let searchField: HTMLElement;
      beforeEach(() => {
        historyMock = {
          push: jest.fn(),
          listen: jest.fn(),
          location: {},
        };
        render(
          <Router history={historyMock}>
            <SearchBox />
          </Router>
        );
        form = screen.getByTestId("search box");
        searchField = screen.getByTestId("search field");
      });
      test("should call history.push with the right url after submiting the form", () => {
        act(() => {
          fireEvent.submit(form);
        });
        expect(historyMock.push.mock.calls[0][0]).toEqual("/items/");
      });
      test("should call history.push with the product typed on the field", () => {
        act(() => {
          fireEvent.change(searchField, { target: { value: "product xyz" } });
        });
        act(() => {
          fireEvent.submit(form);
        });
        expect(historyMock.push.mock.calls[0][0]).toEqual("/items/product xyz");
      });
    });
  });
});
