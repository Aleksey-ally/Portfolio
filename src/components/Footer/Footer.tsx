import s from './Footer.module.scss';
import {useTranslation} from "react-i18next";

export const Footer = () => {
    const {t} = useTranslation();
//@ts-ignore
    return (
        <footer className={s.footerBlock}>
            <p>{t("footer.info")}</p>
        </footer>
    );
};
