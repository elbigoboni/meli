import { render } from "@testing-library/react";
import React from "react";
import { Button } from ".";

describe("<Button />", () => {
  describe("Render", () => {
    test("should render correctly", () => {
      const { container } = render(<Button>Generic button</Button>);
      expect(container).toMatchSnapshot();
    });
  });
});
