import s from './Contacts.module.scss';
import {Title} from "common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <Title subtitle="Contact" title="Contact With Me"/>
            <div className={s.contactForm}>
                <form action="#">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};
