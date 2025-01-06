import s from './App.module.scss';
import {Contacts} from 'components/Contacts/Contacts';
import {Footer} from 'components/Footer/Footer';
import {Header} from 'components/Header/Header';
import {Main} from 'components/Main/Main';
import {Projects} from 'components/Projects/Projects';
import {Skills} from 'components/Skills/Skills';
import {ParticlesBackground} from "components/ParticlesBackground/ParticlesBackground";

const App = () => {
    return (
        <div className={s.App}>
            <ParticlesBackground/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default App;
