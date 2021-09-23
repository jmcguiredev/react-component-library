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

    
  
    let nav = getByTestId('header-nav');
    
    // Checks that all link elements were created and their text content matches the title property 
    for (let i = 0; i < nav.children.length; i++) {
      console.log(nav.children[i].textContent);
      expect(nav.children[i].textContent).toBe(props.links[i].title);
    }


  });
});
