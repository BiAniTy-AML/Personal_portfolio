import { FC } from "react";
// import "./styles/App.css";
import "./styles/index.css";

import Intro from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";

const App: FC = () => {
    return (
        <div className="grid grid-rows-1 md:grid-cols-[1fr_2fr]">
            <Navbar />

            <Intro />
            {/* 

            <Skills />

            <Projects />

            <Contacts />
            */}
        </div>
    );
};

export default App;
