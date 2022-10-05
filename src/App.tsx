import { FC } from 'react';
import './styles/App.css';

import Intro from './components/Introduction';
import Skills from './components/Skills';

const App: FC = () => {
    return (
        <div className="main_container">
            <Intro />

            <Skills />
        </div>
    );
};

export default App;
