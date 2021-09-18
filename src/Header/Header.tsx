// Generated with util/create-component.js
import React from "react";

import { HeaderProps } from "./Header.types";

import "./Header.scss";

const Header: React.FC<HeaderProps> = ({ links }) => (
    <header data-testid="Header" className="jm-header">
        <nav className="jm-header-nav">
        {links.map((link) => <a className="jm-nav-a" href={link.link}>{link.title}</a>)}
        </nav>
    </header>
);

export default Header;

