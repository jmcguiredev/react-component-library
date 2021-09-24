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
  position="center"
  theme="dark"
  fontSize={1.5}
  underlineAnimationStart="center"/>;

  export const RightLight = () => <Header links={links}
  position="right"
  theme="light"
  fontSize={1.5}
  underlineAnimationStart="right"/>;


