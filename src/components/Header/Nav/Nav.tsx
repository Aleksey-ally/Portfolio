import s from 'components/Header/Nav/Nav.module.scss';
import {Link} from "react-scroll";
import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "components/LanguageSwitcher/LanguageSwitcher";

export const Nav = () => {

    const {t} = useTranslation();
//@ts-ignore
    return (
        <nav className={s.nav}>
            <ul>
                <li><Link to={"Main"} activeClass={s.active} spy={true} smooth={true} offset={-1}>{t("nav.main")}</Link></li>
                <li><Link to={"Skills"} activeClass={s.active} spy={true} smooth={true} offset={0}>{t('nav.skills')}</Link></li>
                <li><Link to={"Projects"} activeClass={s.active} spy={true} smooth={true} offset={1}>{t('nav.projects')}</Link></li>
                <li><Link to={"Contacts"} activeClass={s.active} spy={true} smooth={true} offset={1}>{t('nav.contacts')}</Link></li>
            </ul>
           <LanguageSwitcher/>
        </nav>
    );
};
