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
import {Bounce} from "react-awesome-reveal";
import {useTranslation} from "react-i18next";

type formValues = {
    name: string
    email: string
    message: string
}


export const Contacts = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<formValues>()

    const {t} = useTranslation();

    const onSubmit: SubmitHandler<formValues> = (data) => {
        axios.post('https://smtp-backend-pearl.vercel.app/sendMessage', {data})
            .then(() => {
                //@ts-ignore
                toast(t("contactBlock.success"), {
                    style: {background: '#191c20'},
                    type: "success",
                    position: "bottom-right"
                })
                reset()
            })
            .catch((error) => toast(error.message || error,
                {
                    style: {background: '#191c20'},
                    type: "error",
                    position: "bottom-right"
                })
            )
    }


//@ts-ignore

    return (
        <div className={s.contactsBlock}>
            <Title className={s.title} subtitle={t("contactBlock.subtitle")} title={t("contactBlock.title")}/>
            <div className={s.container}>

                    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.inputGroup}>
                            <label htmlFor="name">{t("contactBlock.form.name")}</label>
                            <input {...register("name")} type="text" id="name"/>
                        </div>

                        <div className={s.inputGroup}>
                            <label htmlFor="email">{t("contactBlock.form.email")}</label>
                            <input {...register("email", {required: true})} type="email" id="email"/>
                            {errors.email && <span className={s.error}>{t("contactBlock.error")}</span>}
                        </div>

                        <div className={s.inputGroup}>
                            <label htmlFor="message">{t("contactBlock.form.message")}</label>
                            <textarea {...register("message", {required: true})} id="message" rows={5}></textarea>
                            {errors.message && <span className={s.error}>{t("contactBlock.error")}</span>}
                        </div>

                        <button type="submit" className={s.submitButton}>
                            <span>{t("contactBlock.form.button")}</span>
                        </button>
                    </form>


                <div className={s.social}>
                    <p>{t("contactBlock.info")}</p>
                    <span className={s.mail}>easy.mail.to.copy@gmail.com</span>
                    <ul className={s.socialICons}>
                        <Bounce cascade damping={0.2}>
                            <li><a href="https://t.me/aleksey_ally" target="_blank" rel="noopener noreferrer"><img src={tlg} alt="Telegram-icon"/></a></li>
                            <li><a href="mailto:easy.mail.to.copy@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} alt="Gmail-icon"/></a></li>
                            <li><a href="https://github.com/Aleksey-ally" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github-icon"/></a></li>
                            <li><a href="https://www.linkedin.com/in/aleksey-49494949e/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="LinkedIn-icon"/></a></li>
                        </Bounce>
                    </ul>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};
