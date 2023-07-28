import s from './Project.module.scss';

type WorkType = {
  imgSrc: string;
  title: string;
  description: string;
};

export const Project = ({ imgSrc, title, description }: WorkType) => {
  return (
    <div className={s.project}>
      <div className={s.iconWrapper}><span className={s.icon}></span></div>
      <div className={s.iconAndImg}>
        <a className={s.link} href="#"><img className={s.image} src={imgSrc} alt="#" /></a>
      </div>
      <div className={s.descriptionProject}>
        <div className={s.titleWrapper}><a className={s.title} href="#">{title}</a></div>
        <a className={s.description} href="#">{description}</a>
      </div>
    </div>
  );
};
