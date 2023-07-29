import s from './Skill.module.scss';

type SkillType = {
  title: string;
  description: string;
};

export const Skill = ({ title, description }: SkillType) => {
  return (
    <div className={s.skillContainer}>
      <div className={s.skill}>
        <div className={s.iconBox}><img className={s.icon} src="https://img.icons8.com/?size=512&id=bzf0DqjXFHIW&format=png" alt="#" /></div>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};
