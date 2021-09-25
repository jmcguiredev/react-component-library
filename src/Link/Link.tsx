import React from "react";
import { LinkProps } from "./Link.types";
import "./Link.scss";
import { directionToJustification } from '../services/convert';

const Link: React.FC<LinkProps> = ({ title, link, theme, fontSize, underlineAnimationStart }) => (
    <div className="jm-nav-a-cont">
          <a
            data-testid={`link-a-${title}`}
            className={`jm-nav-a ${theme}-font`}
            key={link}
            href={link}
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

