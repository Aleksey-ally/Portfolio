import s from './LanguageSwitcher.module.scss';
import {useTranslation} from "react-i18next";


export const LanguageSwitcher = () => {
    const {i18n} = useTranslation();

    return <div className={s.languageSwitcher}>
        <button className={`${s.button} ${i18n.language === "ru" ? s.active : ""}`}
                onClick={() => i18n.changeLanguage("ru")}>RU
        </button>
        <span className={s.divider}>|</span>
        <button className={`${s.button} ${i18n.language === "en" ? s.active : ""}`}
                onClick={() => i18n.changeLanguage("en")}>EN
        </button>
    </div>
}