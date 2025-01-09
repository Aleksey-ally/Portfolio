import s from './Skills.module.scss';
import {Skill} from './Skill/Skill';
import {Title} from "common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {ReactNode} from "react";
import {useTranslation} from "react-i18next";

type SkillsType = {
    title: string
    description: string
}

export const Skills = () => {

    const {t} = useTranslation();
//@ts-ignore

    const skills: SkillsType[] = [

        {
            title: t("skillsBlock.skills.react.title"),
            description: t("skillsBlock.skills.react.description")
        },
        {
            title: t("skillsBlock.skills.chatGPT.title"),
            description: t("skillsBlock.skills.chatGPT.description")
        },
        {
            title: t("skillsBlock.skills.restApi.title"),
            description: t("skillsBlock.skills.restApi.description")
        },
        {
            title: t("skillsBlock.skills.redux.title"),
            description: t("skillsBlock.skills.redux.description")
        },
        {
            title: t("skillsBlock.skills.mobx.title"),
            description: t("skillsBlock.skills.mobx.description")
        },
    ]
//@ts-ignore


    return (
        <div className={s.skillsBlock}>
            <Title className={s.title} subtitle={t("skillsBlock.subtitle")} title={t("skillsBlock.title")}/>
            <div className={s.skills}>
                <Fade cascade damping={0.2} direction={"top-left"} triggerOnce>
                    {skills.map((s, index) => {
                        return <Skill key={index} title={s.title} description={s.description}/>
                    }) as ReactNode}
                </Fade>
            </div>


        </div>
    );
};
