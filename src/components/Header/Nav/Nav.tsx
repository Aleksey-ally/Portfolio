import s from 'components/Header/Nav/Nav.module.scss';
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><Link to={"Main"} activeClass={s.active} spy={true} smooth={true} offset={-1}>Main</Link></li>
                <li><Link to={"Skills"} activeClass={s.active} spy={true} smooth={true} offset={0}>Skills</Link></li>
                <li><Link to={"Projects"} activeClass={s.active} spy={true} smooth={true} offset={1}>Projects</Link></li>
                <li><Link to={"Contacts"} activeClass={s.active} spy={true} smooth={true} offset={1}>Contacts</Link></li>
            </ul>
        </nav>
    );
};
