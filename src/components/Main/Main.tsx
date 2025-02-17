import s from './Main.module.scss';
import ReactTypingEffect from "react-typing-effect";
import {useTranslation} from "react-i18next";
import myPhoto from "assets/images/snapedit_1736348096872.png"

export const Main = () => {
    const {t} = useTranslation();
//@ts-ignore
    return (
        <section className={s.mainBlock}>
            <div className={s.textWrapper}>
                <span className={s.subtitle}>{t("mainBlock.welcome")}</span>
                <h1 className={s.title}>{t("mainBlock.hi")}<span className={s.name}>{t("mainBlock.name")}</span>
                    <br/>
                    <ReactTypingEffect
                        className={s.title}
                        cursorClassName={s.typingCursor}
                        speed={50}
                        typingDelay={1500}
                        eraseDelay={1500}
                        eraseSpeed={50}
                        staticText={t("mainBlock.a")}
                        text={[t("mainBlock.profession")]}
                    />
                </h1>
                <p className={s.description}>
                    {t("mainBlock.aboutMe")}
                </p>
            </div>
            <div className={s.wrapperPhoto}>
                <div className={s.thumbnail}></div>
                <img className={s.photo}
                     src={myPhoto} alt="myPhoto"/>
            </div>
        </section>
    );
};
