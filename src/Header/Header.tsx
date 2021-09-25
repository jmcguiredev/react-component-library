// Generated with util/create-component.js
import React from "react";
import { HeaderProps } from "./Header.types";
import Link from "../Link/Link";
import "./Header.scss";

function directionToJustification(direction) {
  switch (direction) {
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
    case "center":
      return "center";
  }
}
// Props:
//   links
//   position
//   theme
//   fontSize
//   underlineAnimationStart

const Header: React.FC<HeaderProps> = ({links, position, theme, fontSize, underlineAnimationStart}) => (
  <header data-testid="Header" className={`jm-header ${theme ? theme : "light"}-bg`}>
    <nav
      style={{
        justifyContent: position
          ? directionToJustification(position)
          : "flex-start",
      }}
      data-testid="header-nav"
      className="jm-header-nav"
    >
      {links.map((link) => (
        <Link 
          title={link.title}
          link={link.link}
          theme={theme}
          fontSize={fontSize}
          underlineAnimationStart={underlineAnimationStart}
        />
      ))}
    </nav>
  </header>
);

export default Header;
