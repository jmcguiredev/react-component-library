// Generated with util/create-component.js
import React from "react";
import { HeaderProps } from "./Header.types";
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

const Header: React.FC<HeaderProps> = ({
  links,
  position,
  theme,
  fontSize,
  underlineAnimationStart,
}) => (
  <header data-testid="Header" className={`${theme ? theme : "light"}-bg`}>
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
        <div className="jm-nav-a-cont">
          <a
            data-testid={`link-a-${links.indexOf(link)}`}
            className={`jm-nav-a ${theme}-font`}
            key={link.link}
            href={link.link}
            style={{ fontSize: `${fontSize ? fontSize : 1}rem` }}
          >
            {link.title}
          </a>
          <span
            className={`jm-nav-a-underscore underscore-${theme}`}
            style={{
              alignSelf: underlineAnimationStart
                ? `${directionToJustification(underlineAnimationStart)}`
                : "center",
            }}
          />
        </div>
      ))}
    </nav>
  </header>
);

export default Header;
