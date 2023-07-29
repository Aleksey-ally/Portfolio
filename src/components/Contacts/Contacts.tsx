import { Title } from '../../common/components/title/Title';
import s from './Contacts.module.scss';
import styleContainer from '../../common/styles/Container.module.css';


export const Contacts = () => {
  return (
    <div className={s.contactsBlock}>
      <div className={`${styleContainer.container} ${s.contactsContainer}`}>
        <Title subtitle="Contact" title="Contact With Me" />
        <div className={s.contactForm}>
          <form action="#">
            <input type="text" />
            <input type="text" />
            <textarea name="" id="" cols={30} rows={10}></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
