import { FC } from "react";
import "./styles/App.css";

import Intro from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";

const App: FC = () => {
    return (
        <div className="main_container">
            <Navbar />

            <Intro />

            <Skills />

            <Projects />

            <Contacts />
        </div>
    );
};

export default App;
