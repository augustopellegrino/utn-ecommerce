import { useState } from 'react';

import WindowSize from '../../utils/WindowSize';
import { BREAKPOINTS } from '../../utils/Breackpoints';

import './NavBar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

import { AccountButton, Cart, Logo, NavMenuList, PostalCode, SearchBar } from './index'


const NavBar = () => {
    const windowSize = WindowSize();
    const [isOpen, setIsOpen] = useState(false);

    // Función para alternar el menú hamburguesa
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header id="navBar">
            {windowSize.width <= BREAKPOINTS.md && (
                <>
                    <div id="navBar-hamburguer">
                        <Logo />
                        <div id="navBar-principal">
                            <AccountButton />
                            <button onClick={toggleMenu} id="hambuerguer-button"><RxHamburgerMenu /></button>
                            {isOpen && (
                                <nav id="hamburger-menu-open">
                                    <div id="hamburger-menu-open-top">
                                        <Logo />
                                        <button onClick={toggleMenu} id="hambuerguer-button"><VscChromeClose /></button>
                                    </div>
                                    <ul>
                                        <NavMenuList close={toggleMenu} />
                                    </ul>
                                </nav>)}
                        </div>
                    </div>
                    <SearchBar />
                    <div id="navBar-menu">
                        <PostalCode />
                        <Cart />
                    </div>
                </>
            )}
            {windowSize.width > BREAKPOINTS.md && (
                <>
                    <div id="navBar-top">
                        <Logo />
                        <SearchBar />
                        <div id="navBar-principal">
                            <PostalCode />
                            <Cart />
                            <AccountButton />
                        </div>
                    </div>
                    <hr />
                    <nav id="hamburger-menu-in-line">
                        <ul>
                            <NavMenuList />
                        </ul>
                    </nav>
                </>
            )}
        </header>
    )
}

export default NavBar