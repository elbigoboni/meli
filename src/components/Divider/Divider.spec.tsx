import { render } from "@testing-library/react";
import React from "react";
import { Divider } from ".";

describe("<Divider />", () => {
  describe("Render", () => {
    test("should render correctly", () => {
      const { container } = render(<Divider />);
      expect(container).toMatchSnapshot();
    });
  });
});
