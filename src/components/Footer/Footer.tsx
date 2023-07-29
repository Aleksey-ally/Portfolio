import s from './Footer.module.scss';
import styleContainer from '../../common/styles/Container.module.css';
import { Title } from '../../common/components/title/Title';

export const Footer = () => {
  return (
    <div className={s.footerBlock}>
      <div className={`${styleContainer.container} ${s.footerContainer}`}>
      <Title subtitle="Footer" title="Fedorov Aleksey" />
        <div className={s.icons}>
          <img
            className={s.icon}
            src="https://img.icons8.com/?size=512&id=118557&format=png"
            alt="#"
          />
          <img
            className={s.icon}
            src="https://img.icons8.com/?size=512&id=118557&format=png"
            alt="#"
          />
          <img
            className={s.icon}
            src="https://img.icons8.com/?size=512&id=118557&format=png"
            alt="#"
          />
          <img
            className={s.icon}
            src="https://img.icons8.com/?size=512&id=118557&format=png"
            alt="#"
          />
        </div>
        <p>Copyright © 2023 All Rights Reserved.</p>
      </div>
    </div>
  );
};
