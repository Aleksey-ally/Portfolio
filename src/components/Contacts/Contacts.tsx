import s from './Contacts.module.scss';
import {Title} from "common/components/title/Title";
import axios from "axios"
import {SubmitHandler, useForm} from "react-hook-form";

type formValues = {
    name: string
    email: string
    message: string
}


export const Contacts = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<formValues>()

    const onSubmit: SubmitHandler<formValues> = (data) => {
        axios.post('https://smtp-backend-pearl.vercel.app/sendMessage', {data})
            .then(() => alert("Your message has been sent"))
            .catch((error) => alert(error))
    }

    return (
        <div className={s.contactsBlock}>
            <Title className={s.title} subtitle="Contact" title="Contact With Me"/>
            <div className={s.formContainer}>
                <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.inputGroup}>
                        <label htmlFor="name">Your Name</label>
                        <input {...register("name")} type="text" id="name"/>
                    </div>

                    <div className={s.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input {...register("email", {required: true})} type="email" id="email"/>
                        {errors.email && <span className={s.error}>This field is required</span>}
                    </div>

                    <div className={s.inputGroup}>
                        <label htmlFor="message">Your Message</label>
                        <textarea {...register("message", {required: true})} id="message" rows={5}></textarea>
                        {errors.message && <span className={s.error}>This field is required</span>}
                    </div>

                    <button type="submit" className={s.submitButton}>
                        <span>Send Message</span>
                    </button>
                </form>
            </div>
        </div>
    );
};
