import { FC } from 'react';
import './styles/App.css';

import Intro from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const App: FC = () => {
    return (
        <div className="main_container">
            <Intro />

            <Skills />

            <Projects />

            <Contacts />
        </div>
    );
};

export default App;
