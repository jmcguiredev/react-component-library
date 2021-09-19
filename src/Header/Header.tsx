// Generated with util/create-component.js
import React from "react";

import { HeaderProps } from "./Header.types";

import "./Header.scss";

const Header: React.FC<HeaderProps> = ({ links }) => (
    <header data-testid="Header" className="jm-header">
        <nav data-testid="header-nav" className="jm-header-nav">
        {links.map((link) => <a data-testid={`link-a-${links.indexOf(link)}`} className="jm-nav-a" key={link.link} href={link.link}>{link.title}</a>)}
        </nav>
    </header>
);

export default Header;

