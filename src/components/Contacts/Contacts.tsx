import s from './Contacts.module.scss';
import {Title} from "common/components/title/Title";
import {FormEvent} from "react";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const handleSubmit = (a: FormEvent<HTMLFormElement>) => {
    a.preventDefault()
    const form = a.currentTarget
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
        data[key] = value.toString();
    });
    axios.post('https://smtp-backend-pearl.vercel.app/sendMessage', {data})
        .then(()=>alert("Your message has been sent"))
        .catch((error) => alert(error))
}

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <Title className={s.title} subtitle="Contact" title="Contact With Me"/>
            <div className={s.formContainer}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <div className={s.inputGroup}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name"/>
                    </div>

                    <div className={s.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"/>
                    </div>

                    <div className={s.inputGroup}>
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" rows={5}></textarea>
                    </div>

                    <button type="submit" className={s.submitButton}>
                        <span>Send Message</span>
                    </button>
                </form>
            </div>
        </div>
    );
};
