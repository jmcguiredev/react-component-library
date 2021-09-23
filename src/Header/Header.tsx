// Generated with util/create-component.js
import React from "react";
import { HeaderProps } from "./Header.types";
import "./Header.scss";



const Header: React.FC<HeaderProps> = ({ links, justify, theme, fontSize }) => (
    <header data-testid="Header" className={`${theme ? theme : 'light'}-bg`}>
        <nav style={{ justifyContent: justify }} data-testid="header-nav" className="jm-header-nav">
        {links.map((link) => <a 
        data-testid={`link-a-${links.indexOf(link)}`} 
        className={`jm-nav-a ${theme}-font`} 
        key={link.link} 
        href={link.link}
        style={{ fontSize: `${fontSize ? fontSize : 1}rem`, borderColor: `jm-turqoise-${theme}mode`}}>
            {link.title}
            </a>)}
        </nav>
    </header>
);

export default Header;

