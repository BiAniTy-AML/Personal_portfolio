import { FC } from 'react';
import './styles/App.css';

import Intro from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App: FC = () => {
    return (
        <div className="main_container">
            <Intro />

            <Skills />

            <Projects />
        </div>
    );
};

export default App;
