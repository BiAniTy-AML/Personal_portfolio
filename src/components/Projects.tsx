import { FC } from 'react';

interface Props {}

const Projects: FC<Props> = () => {
    return (
        <section className="projects_container section_cont">
            <h2 className="header">Projects:</h2>

            <div className="projects">
                <div className="project">
                    <img src="" alt="" className="screenshot" />
                    <div className="description">Project 1</div>
                </div>

                <div className="project">
                    <img src="" alt="" className="screenshot" />
                    <div className="description">Project 2</div>
                </div>

                <div className="project">
                    <img src="" alt="" className="screenshot" />
                    <div className="description">Project 3</div>
                </div>

                <div className="project">
                    <img src="" alt="" className="screenshot" />
                    <div className="description">Project 4</div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
