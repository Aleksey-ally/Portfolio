import s from './Project.module.css';
import { ReactComponent as Icon } from '../../../assets/svg/externalLink.svg';

type WorkType = {
  imgSrc: string;
  title: string;
  description: string;
};

export const Project = ({ imgSrc, title, description }: WorkType) => {
  return (
    <div className={s.project}>
      <div className={s.iconWrapper}><span className={s.icon}></span></div>
      <div
        className={s.iconAndButton}>
        <a className={s.link} href="#"><div className={s.imageContainer}><img className={s.image} src={imgSrc} alt="#" /></div></a>
      </div>
      <div>
        <div className={s.titleWrapper}><a className={s.title} href="#">{title}</a></div>
        <a className={s.description} href="#">{description}</a>
      </div>
    </div>
  );
};
