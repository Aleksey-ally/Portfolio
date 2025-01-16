import s from './Project.module.scss';

type WorkType = {
    imgSrc: string;
    title: string;
    description: string;
    deployLink: string
    gitLink: string
    storyLink?: string
};

export const Project = ({imgSrc, title, description, deployLink, gitLink, storyLink}: WorkType) => {
    return (
        <div className={s.project}>
            <div className={s.iconWrapper}>
                <a href={deployLink} target="_blank" rel="noopener noreferrer">
                    <span className={s.iconDeploy}/>
                </a>
                <a href={gitLink} target="_blank" rel="noopener noreferrer">
                    <span className={s.iconGitHub}/>
                </a>
                {storyLink &&
                    <a href={storyLink} target="_blank" rel="noopener noreferrer">
                        <span className={s.iconStorybook}/>
                    </a>}
            </div>
            <div className={s.iconAndImg}>
                <a className={s.link} href={deployLink} target="_blank" rel="noopener noreferrer"><img
                    className={s.image}
                    src={imgSrc} alt="#"/></a>
            </div>
            <div className={s.descriptionProject}>
                <div className={s.titleWrapper}><a className={s.title} href={deployLink} target="_blank"
                                                   rel="noopener noreferrer">{title}</a></div>
                <a className={s.description} href={deployLink} target="_blank"
                   rel="noopener noreferrer">{description}</a>
            </div>
        </div>
    );
};
