import { createElement } from "react";

jest.mock("@aivenio/aquarium", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@aivenio/aquarium"),
    Icon: () => {
      return createElement("div", { "data-testid": "ds-icon" }, ``);
    },
  };
});
