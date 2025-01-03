import s from './Title.module.scss';

type TitleType = {
    subtitle: string
    title: string
    className?: string
}

export const Title = ({subtitle, title, className}: TitleType) => {
    return (
        <div className={`${s.titleContainer} ${className}`}>
            <span className={s.subtitle}>{subtitle}</span>
            <h2 className={s.title}>{title}</h2>
        </div>
    );
};
