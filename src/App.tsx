import s from './App.module.scss';
import {Contacts} from 'components/Contacts/Contacts';
import {Footer} from 'components/Footer/Footer';
import {Header} from 'components/Header/Header';
import {Main} from 'components/Main/Main';
import {Projects} from 'components/Projects/Projects';
import {Skills} from 'components/Skills/Skills';
import {ParticlesBackground} from "components/ParticlesBackground/ParticlesBackground";
import {Fade} from "react-awesome-reveal";
import {Element} from "react-scroll";


const App = () => {
    return (
        <div className={s.App}>
            <ParticlesBackground/>
            <Header/>
            <Element name={"Main"}>
                <Main/>
            </Element>


            <Fade direction={"top-left"} triggerOnce>
                <Element name={"Skills"}>
                    <Skills/>
                </Element>
            </Fade>

            <Fade direction={"down"} triggerOnce>
                <Element name={"Projects"}>
                    <Projects/>
                </Element>
                <Element name={"Contacts"}>
                    <Contacts/>
                </Element>

                <Footer/>

            </Fade>
        </div>
    );
};

export default App;
