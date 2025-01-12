import s from './Project.module.scss';

type WorkType = {
    imgSrc: string;
    title: string;
    description: string;
    link: string
};

export const Project = ({imgSrc, title, description, link}: WorkType) => {
    return (
        <div className={s.project}>
            <div className={s.iconWrapper}><span className={s.icon}></span></div>
            <div className={s.iconAndImg}>
                <a className={s.link} href={link} target="_blank" rel="noopener noreferrer"><img className={s.image} src={imgSrc} alt="#"/></a>
            </div>
            <div className={s.descriptionProject}>
                <div className={s.titleWrapper}><a className={s.title} href={link} target="_blank" rel="noopener noreferrer">{title}</a></div>
                <a className={s.description} href={link} target="_blank" rel="noopener noreferrer">{description}</a>
            </div>
        </div>
    );
};
