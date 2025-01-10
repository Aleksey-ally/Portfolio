import s from './Skill.module.scss';
import {ReactNode} from "react";

type SkillType = {
  title: string;
  description: string;
  icon: ReactNode
};

export const Skill = ({ title, description, icon }: SkillType) => {
  return (
    <div className={s.skillContainer}>
      <div className={s.skill}>
        <div className={s.iconBox}>{icon}</div>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};
