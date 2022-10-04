import { FC } from 'react';
import './styles/App.css';

import Intro from './components/Introduction';

const App: FC = () => {
    return (
        <div className="main_container">
            <Intro />
        </div>
    );
};

export default App;
