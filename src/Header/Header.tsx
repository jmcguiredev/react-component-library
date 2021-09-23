// Generated with util/create-component.js
import React from "react";
import { HeaderProps } from "./Header.types";
import "./Header.scss";



const Header: React.FC<HeaderProps> = ({ links, justify, theme, fontSize }) => (
    <header data-testid="Header" className={`${theme ? theme : 'light'}-bg`}>
        <nav style={{ justifyContent: justify }} data-testid="header-nav" className="jm-header-nav">
        {links.map((link) => <div className="jm-nav-a-cont"><a 
        data-testid={`link-a-${links.indexOf(link)}`} 
        className={`jm-nav-a ${theme}-font`} 
        key={link.link} 
        href={link.link}
        style={{ fontSize: `${fontSize ? fontSize : 1}rem`}}>
            {link.title}
            </a>
            <span className={`jm-nav-a-underscore underscore-${theme}`}/>
            </div>)}
        </nav>
    </header>
);

export default Header;

