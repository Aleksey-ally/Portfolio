import s from './Skills.module.scss';
import {Skill} from './Skill/Skill';
import {Title} from "common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {ReactNode} from "react";
import {useTranslation} from "react-i18next";
import {Axios, CSS, Git, HTML, JS, MUI, RestApi, React, Redux, RHF, RRD, RTK, SASS, Storybook, TS} from "assets/svg";


type SkillsType = {
    title: string
    description: string
    icon: ReactNode
}

export const Skills = () => {

    const {t} = useTranslation();
//@ts-ignore

    const skills: SkillsType[] = [

        {
            title: t("skillsBlock.skills.react.title"),
            description: t("skillsBlock.skills.react.description"),
            icon: <React/>
        },
        {
            title: t("skillsBlock.skills.js.title"),
            description: t("skillsBlock.skills.js.description"),
            icon: <JS/>

        },
        {
            title: t("skillsBlock.skills.ts.title"),
            description: t("skillsBlock.skills.ts.description"),
            icon: <TS/>

        },
        {
            title: t("skillsBlock.skills.redux.title"),
            description: t("skillsBlock.skills.redux.description"),
            icon: <Redux/>
        },
        {
            title: t("skillsBlock.skills.reduxToolkit.title"),
            description: t("skillsBlock.skills.reduxToolkit.description"),
            icon: <RTK/>
        },
        {
            title: t("skillsBlock.skills.axios.title"),
            description: t("skillsBlock.skills.axios.description"),
            icon: <Axios/>
        },
        {
            title: t("skillsBlock.skills.git.title"),
            description: t("skillsBlock.skills.git.description"),
            icon: <Git/>
        },
        {
            title: t("skillsBlock.skills.storybook.title"),
            description: t("skillsBlock.skills.storybook.description"),
            icon: <Storybook/>

        },
        {
            title: t("skillsBlock.skills.html.title"),
            description: t("skillsBlock.skills.html.description"),
            icon: <HTML/>

        },
        {
            title: t("skillsBlock.skills.css.title"),
            description: t("skillsBlock.skills.css.description"),
            icon: <CSS/>

        },
        {
            title: t("skillsBlock.skills.sass.title"),
            description: t("skillsBlock.skills.sass.description"),
            icon: <SASS/>

        },
        {
            title: t("skillsBlock.skills.rhf.title"),
            description: t("skillsBlock.skills.rhf.description"),
            icon: <RHF/>

        },
        {
            title: t("skillsBlock.skills.rrd.title"),
            description: t("skillsBlock.skills.rrd.description"),
            icon: <RRD/>

        },
        {
            title: t("skillsBlock.skills.mui.title"),
            description: t("skillsBlock.skills.mui.description"),
            icon: <MUI/>

        },
        {
            title: t("skillsBlock.skills.restAPI.title"),
            description: t("skillsBlock.skills.restAPI.description"),
            icon: <RestApi/>
        }
    ]

//@ts-ignore
    return (
        <section className={s.skillsBlock}>
            <Title className={s.title} subtitle={t("skillsBlock.subtitle")} title={t("skillsBlock.title")}/>
            <div className={s.skills}>
                <Fade cascade damping={0.2} direction={"top-left"} triggerOnce>
                    {skills.map((s, index) => {
                        return <Skill key={index} title={s.title} description={s.description} icon={s.icon}/>
                    }) as ReactNode}
                </Fade>
            </div>
        </section>
    );
};
