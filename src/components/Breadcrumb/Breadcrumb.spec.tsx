import { render } from "@testing-library/react";
import React from "react";
import { Breadcrumb } from ".";

describe("<Breadcrumb />", () => {
  describe("Render", () => {
    test("should render correctly", () => {
      const { container } = render(
        <Breadcrumb
          path={[
            "Eletrônica, Audio y Video",
            "iPod",
            "Reproductores",
            "iPod touch",
            "32gb",
          ]}
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
