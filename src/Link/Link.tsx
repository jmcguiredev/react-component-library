import React from "react";
import { LinkProps } from "./Link.types";
import "./Link.scss";
import { directionToJustification } from '../services/convert';

const Link: React.FC<LinkProps> = ({ title, link, theme, fontSize, underlineAnimationStart, selected, handleClick }) => (
    <div className="jm-nav-a-cont">
          <a
          onClick={handleClick}
            data-testid={`link-a-${title}`}
            className={`jm-nav-a ${theme}-font ${theme}-font-${selected === title ? 'selected' : 'unselected'}`}
            key={link}
            href={""}
            style={{ fontSize: `${fontSize ? fontSize : 1}rem` }}
          >
            {title}
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
);

export default Link;

