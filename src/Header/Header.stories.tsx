// Generated with util/create-component.js
import React from "react";
import Header from "./Header";

export default {
    title: "Header"
};

let links = [
  {
    title: "Google",
    link: "https://google.com/"
  },
  {
    title: "Facebook",
    link: "https://facebook.com/"
  }
]

export const LeftDark = () => <Header links={links}
  justify="flex-start"
  theme="dark"
  fontSize={1.1}/>;

  export const RightLight = () => <Header links={links}
  justify="flex-end"
  theme="light"
  fontSize={1}/>;


