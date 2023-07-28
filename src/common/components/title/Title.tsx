import s from './Title.module.scss';

type TitleType = {
  subtitle: string
  title: string
}

export const Title = ({ subtitle, title }: TitleType) => {
  return (
    <div className={s.titleContainer} >
      <span className={s.subtitle}>{subtitle}</span>
      <h2 className={s.title}>{title}</h2>
    </div>
  );
};
