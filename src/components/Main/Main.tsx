import s from './Main.module.scss';
import ReactTypingEffect from "react-typing-effect";

export const Main = () => {
    return (
        <section className={s.mainBlock}>
            <div className={s.textWrapper}>
                <span className={s.subtitle}>Welcome everyone</span>
                <h1 className={s.title}>Hi, I’m <span className={s.name}>Aleksey Fedorov</span>
                    <br/>
                    <ReactTypingEffect
                        className={s.title}
                        cursorClassName={s.typingCursor}
                        speed={50}
                        typingDelay={1500}
                        eraseDelay={1500}
                        eraseSpeed={50}
                        staticText={'a'}
                        text={["Frontend Developer."]}
                    />
                </h1>
                <p className={s.description}>I have experience
                    in creating SPA with
                    React, Redux, TypeScript.
                    Now I am improving my
                    skills in this direction and
                    expanding them with new
                    technologies. I spend my
                    leisure time with educational
                    books, solving tasks on
                    Codewars and also improving
                    my English. Open for your
                    suggestions.</p>
            </div>
            <div className={s.wrapperPhoto}>
                <div className={s.thumbnail}></div>
                <img className={s.photo}
                     src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png" alt="#"/>
            </div>
        </section>
    );
};
