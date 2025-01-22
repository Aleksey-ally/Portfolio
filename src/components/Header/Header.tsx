import {Nav} from './Nav/Nav';
import s from 'components/Header/Header.module.scss';
import {useEffect, useState} from "react";

export const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isSticky]);
    return (
        <header className={`${s.header} ${isSticky ? s.sticky : ""}`}>
            <Nav/>
        </header>
    );
};
