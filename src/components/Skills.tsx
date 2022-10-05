import { FC } from 'react';

interface Props {}

const Skills: FC<Props> = () => {
    return (
        <section className="skills_container section_cont">
            <h2 className="header">Skills:</h2>

            <div className="known_tech">
                <div className="tech">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        alt=""
                        className="icon"
                    />

                    <div className="name">Javascript</div>
                </div>

                <div className="tech">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        alt=""
                        className="icon"
                    />

                    <div className="name">Typescript</div>
                </div>

                <div className="tech">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        alt=""
                        className="icon"
                    />

                    <div className="name">React</div>
                </div>

                <div className="tech">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        alt=""
                        className="icon"
                    />

                    <div className="name">CSS</div>
                </div>

                <div className="tech">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        alt=""
                        className="icon"
                    />

                    <div className="name">HTML</div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
