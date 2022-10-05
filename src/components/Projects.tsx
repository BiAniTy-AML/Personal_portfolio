import { FC } from 'react';

interface Props {}

const Projects: FC<Props> = () => {
    return (
        <section className="projects_container section_cont">
            <h2 className="header">Projects:</h2>

            <div className="projects">
                <div className="project">
                    <img src="" alt="" className="screenshot" />
                    <div className="details">
                        <div className="main_info">
                            <div className="name">Project 01</div>
                            <div className="icons">
                                <a href="#">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt=""
                                        className="icon"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dolores reprehenderit illo perferendis ducimus
                            vel excepturi fugit totam asperiores maxime dolorum?
                        </div>
                    </div>
                </div>

                <div className="project">
                    <img src="" alt="" className="screenshot" />
                    <div className="details">
                        <div className="main_info">
                            <div className="name">Project 02</div>
                            <div className="icons">
                                <a href="#">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt=""
                                        className="icon"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Hic, nam? Esse alias, sed molestias dolore
                            ipsa recusandae dicta nobis eaque.
                        </div>
                    </div>
                </div>

                <div className="project">
                    <img src="" alt="" className="screenshot" />
                    <div className="details">
                        <div className="main_info">
                            <div className="name">Project 03</div>
                            <div className="icons">
                                <a href="#">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt=""
                                        className="icon"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ipsum blanditiis modi autem cum totam eos
                            soluta reprehenderit, placeat magni assumenda?
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src="" alt="" className="screenshot" />
                    <div className="details">
                        <div className="main_info">
                            <div className="name">Project 04</div>
                            <div className="icons">
                                <a href="#">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt=""
                                        className="icon"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Dolorum, amet quibusdam. Dignissimos dolore
                            voluptates reiciendis exercitationem quibusdam unde
                            delectus quasi.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
