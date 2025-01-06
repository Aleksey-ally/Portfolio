import s from './App.module.scss';
import {Contacts} from 'components/Contacts/Contacts';
import {Footer} from 'components/Footer/Footer';
import {Header} from 'components/Header/Header';
import {Main} from 'components/Main/Main';
import {Projects} from 'components/Projects/Projects';
import {Skills} from 'components/Skills/Skills';
import {ParticlesBackground} from "components/ParticlesBackground/ParticlesBackground";
import {Fade} from "react-awesome-reveal";


const App = () => {
    return (
        <div className={s.App}>
            <ParticlesBackground/>
            <Header/>
            <Main/>
            <Fade direction={"top-left"} triggerOnce>
                <Skills/>
            </Fade>
            <Fade direction={"down"} triggerOnce>
                <Projects/>
                <Contacts/>
                <Footer/>
            </Fade>
        </div>
    );
};

export default App;
