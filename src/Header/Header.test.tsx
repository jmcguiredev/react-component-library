// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";
import { HeaderProps } from "./Header.types";

describe("Test Component", () => {
  let props: HeaderProps;

  beforeEach(() => {
    props = {
      links: [
        {
          title: "Google",
          link: "https://google.com/"
        },
        {
          title: "Facebook",
          link: "https://facebook.com/"
        }
      ]
    };
  });

  const renderComponent = () => render(<Header {...props} />);

  it("should render foo text correctly", () => {
    props.links = [
      {
        title: "Google",
        link: "https://google.com/"
      },
      {
        title: "Facebook",
        link: "https://facebook.com/"
      }
    ];
    const { getByTestId } = renderComponent();

    const component = getByTestId("Header");

    expect(component).toHaveTextContent("harvey was here");
  });
});
