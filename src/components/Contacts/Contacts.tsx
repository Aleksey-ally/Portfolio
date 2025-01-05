import s from './Contacts.module.scss';
import '../../common/styles/sass/variables.scss';
import {Title} from "common/components/title/Title";
import axios from "axios"
import {SubmitHandler, useForm} from "react-hook-form";
import {toast, ToastContainer} from "react-toastify";
import tlg from "assets/svg/telegram.svg"
import gmail from "assets/svg/gmail.svg"
import github from "assets/svg/github.svg"
import linkedIn from "assets/svg/linkedIn.svg"

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
            .then(() => toast("Your message has been sent", {
                style: {background: '#191c20'},
                type: "success",
                position: "bottom-right"
            }))
            .catch((error) => toast(error.message || error,
                {
                    style: {background: '#191c20'},
                    type: "error",
                    position: "bottom-right"
                })
            )
    }

    return (
        <div className={s.contactsBlock}>
            <Title className={s.title} subtitle="Contact" title="Contact With Me"/>
            <div className={s.container}>

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


                <div className={s.social}>
                    <p>Or contact me in a way more convenient for you</p>
                    <span className={s.mail}>easy.mail.to.copy@gmail.com</span>
                    <ul className={s.socialICons}>
                        <li><a href="#eswrg"><img src={tlg} alt="#"/></a></li>
                        <li><a href="#eswrg"><img src={gmail} alt="#"/></a></li>
                        <li><a href="#eswrg"><img src={github} alt="#"/></a></li>
                        <li><a href="#eswrg"><img src={linkedIn} alt="#"/></a></li>
                    </ul>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};
