import s from './Skills.module.scss';
import {Skill} from './Skill/Skill';
import {Title} from "common/components/title/Title";
import {Fade} from "react-awesome-reveal";

type SkillsType = {
    title: string
    description: string
}

const skills: SkillsType[] = [

    {
        title: "React",
        description: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components."
    },
    {
        title: "ChatGPT",
        description: "ChatGPT is a conversational AI model developed by OpenAI based on the Generative Pretrained Transformer 3 (GPT-3) architecture."
    },
    {
        title: "REST API",
        description: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components."
    },
    {
        title: "Redux",
        description: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components."
    },
    {
        title: "Mobx",
        description: "MobX is a state management library for JavaScript applications. It provides a simple and scalable way to manage the state of your application and keep it in sync with the user interface."
    },
]

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <Title className={s.title} subtitle="Features" title="Skills"/>
            <div className={s.skills}>
                <Fade cascade damping={0.2} direction={"top-left"} triggerOnce>
                    {skills.map((s, index) => {
                        return <Skill key={index} title={s.title} description={s.description}/>
                    })}
                </Fade>
            </div>


        </div>
    );
};
