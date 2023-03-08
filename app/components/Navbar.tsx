'use client';

import { useState } from 'react';
import Link from 'next/link';
import ConnectButton from './ConnectButton';

export default function Navbar() {
    const [isActive, setisActive] = useState(false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="#"
                    onClick={() => { setisActive(!isActive); }}
                    role="button"
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarAccount">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarAccount" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <ConnectButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}
