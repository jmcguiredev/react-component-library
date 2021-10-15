// Generated with util/create-component.js
import React, { useState } from "react";
import { HeaderProps } from "./Header.types";
import Link from "../Link/Link";
import { directionToJustification } from "../services/convert";
import "./style.scss";

const Header: React.FC<HeaderProps> = ({
  links,
  position,
  theme,
  fontSize,
  underlineAnimationStart,
}) => {

  let [selected, setSelected] = useState(links[0].title);

  const handleClick = (e): void => {
    setSelected(e.target.value);
  }

  return (
    <header
      data-testid="Header"
      className={`jm-header ${theme ? theme : "light"}-bg`}
    >
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
            handleClick={handleClick}
            selected={selected}
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
};

export default Header;
