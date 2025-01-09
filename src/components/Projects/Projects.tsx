import s from './Projects.module.scss';
import {Project} from './Project/Project';
import imgTodoList from '../../assets/images/TodoList.png'
import imgSocialNetwork from '../../assets/images/SocialNetwork.jpg'
import {Title} from "common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {ReactNode} from "react";
import {useTranslation} from "react-i18next";

type ProjectsType = {
    title: string
    description: string
    imgSrc: string
}


export const Projects = () => {

    const {t} = useTranslation();
//@ts-ignore

    const projects: ProjectsType[] = [
        {
            imgSrc: imgTodoList,
            title: t("projectsBlock.projects.todoList.title"),
            description: t("projectsBlock.projects.todoList.description")
        },
        {
            imgSrc: imgSocialNetwork,
            title: t("projectsBlock.projects.socialNetwork.title"),
            description: t("projectsBlock.projects.socialNetwork.description")
        },
        {
            imgSrc: "https://avatanplus.com/files/resources/mid/5a85ac6ddd1d81619a298d52.png",
            title: t("projectsBlock.projects.cats.title"),
            description: t("projectsBlock.projects.cats.description")
        },
    ]
//@ts-ignore

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <Title subtitle={t("projectsBlock.subtitle")} title={t("projectsBlock.title")}/>
            <div className={s.projects}>
                <Fade cascade={true} damping={0.2} direction={"top-left"} triggerOnce>
                    {projects.map((p, index) => {
                        return <Project key={index} title={p.title} description={p.description} imgSrc={p.imgSrc}/>
                    }) as ReactNode}
                </Fade>

            </div>
        </div>
    );
};
