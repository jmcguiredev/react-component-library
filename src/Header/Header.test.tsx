// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";
import { HeaderProps } from "./Header.types";

describe("Header component", () => {
  let props: HeaderProps = {
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


  const renderComponent = () => render(<Header {...props} />);

  it("should render link elements", () => {
    
    const { getByTestId } = renderComponent();

    // Checks that all link elements were created
    props.links.forEach((link) => {
      expect(getByTestId(`link-a-${props.links.indexOf(link)}`)).not.toBe(null);
    });


  });
});
