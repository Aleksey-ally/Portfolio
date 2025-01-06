import s from './Projects.module.scss';
import {Project} from './Project/Project';
import imgTodoList from '../../assets/images/TodoList.png'
import imgSocialNetwork from '../../assets/images/SocialNetwork.jpg'
import {Title} from "common/components/title/Title";
import {Fade} from "react-awesome-reveal";

type ProjectsType = {
    title: string
    description: string
    imgSrc: string
}

const projects: ProjectsType[] = [

    {
        imgSrc: imgTodoList,
        title: "TodoList",
        description: "Stack: TypeScript, React, Redux toolkit, Redux-Thunk, React Router DOM, Axios, Formik, MUI, Storybook"
    },
    {
        imgSrc: imgSocialNetwork,
        title: "Social Network",
        description: "Stack: TypeScript, React, React Router DOM"
    },
    {
        imgSrc: "https://avatanplus.com/files/resources/mid/5a85ac6ddd1d81619a298d52.png",
        title: "Cats",
        description: "Cats (also known as the domestic cat or house cat to distinguish it from other felids), is a small domesticated carnivorous mammal that is valued by humans for its companionship and its ability to hunt vermin and household pests."
    },

]

export const Projects = () => {
    return (
        <div id={'projects'} className={s.projectsBlock}>
            <Title subtitle="Visit my projects" title="Projects"/>
            <div className={s.projects}>
                <Fade cascade={true} damping={0.2} direction={"top-left"} triggerOnce>
                    {projects.map((p, index) => {
                        return <Project key={index} title={p.title} description={p.description} imgSrc={p.imgSrc}/>
                    })}
                </Fade>

            </div>
        </div>
    );
};
