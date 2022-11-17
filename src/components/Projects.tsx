import { FC, ReactElement } from "react";

import external_link_img from "../assets/icons/external-link.svg";

interface Props {}

type Project = {
    name: string;
    description: string;
    screenshot: string;
    live_link: string;
    gh_link: string;
};

const Projects: FC<Props> = () => {
    const projects: Project[] = [
        {
            name: "Rock Paper Scissors",
            description: "Simple r.p.s game",
            screenshot: "rps.png",
            live_link: "https://filipytav.github.io/Rock_paper_scissors/",
            gh_link: "https://github.com/FilipyTav/Rock_paper_scissors",
        },
        {
            name: "Weather App",
            description: "Check the weather!",
            screenshot: "weather.png",
            live_link: "https://filipytav.github.io/Weather_App/",
            gh_link: "https://github.com/FilipyTav/Weather_App",
        },
        {
            name: "Gem shop",
            description: "A fictional shop",
            screenshot: "gem_shop.png",
            live_link: "https://filipytav.github.io/Shop_page/",
            gh_link: "https://github.com/FilipyTav/Shop_page",
        },
        {
            name: "Tic Tac Toe",
            description: "A tic tac toe board",
            screenshot: "ttt.png",
            live_link: "https://filipytav.github.io/Tic_Tac_Toe/",
            gh_link: "https://github.com/FilipyTav/Tic_Tac_Toe",
        },
        {
            name: "Memory card game",
            description:
                "Can you remember which cards have you already picked?",
            screenshot: "mem_card.png",
            live_link: "https://filipytav.github.io/Memory_card/",
            gh_link: "https://github.com/FilipyTav/Memory_card",
        },
        {
            name: "Sign up form",
            description: "A design for signing up in a site",
            screenshot: "signup.png",
            live_link: "https://filipytav.github.io/sign-up_form/",
            gh_link: "https://github.com/FilipyTav/sign-up_form",
        },
        {
            name: "Todo list",
            description: "A todo list site",
            screenshot: "todolist.png",
            live_link: "https://filipytav.github.io/Todo_List/",
            gh_link: "https://github.com/FilipyTav/Todo_List",
        },
        {
            name: "Sketchpad",
            description: "A drawing board",
            screenshot: "sketchpad.png",
            live_link: "https://filipytav.github.io/Sketchpad/",
            gh_link: "https://github.com/FilipyTav/Sketchpad",
        },
    ];
    const projs_DOM: ReactElement[] = [];

    projects.forEach((proj) =>
        projs_DOM.push(
            <div className="project" key={proj.name + proj.description}>
                <img
                    src={require(`../assets/images/${proj.screenshot}`)}
                    alt=""
                    className="screenshot"
                />
                <div className="details">
                    <div className="main_info">
                        <div className="name">{proj.name}</div>
                        <div className="icons">
                            <a href={proj.live_link}>
                                <img
                                    src={external_link_img}
                                    alt=""
                                    className="icon"
                                />
                            </a>

                            <a href={proj.gh_link}>
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    alt=""
                                    className="icon"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="description">{proj.description}</div>
                </div>
            </div>,
        ),
    );

    return (
        <section className="projects_container section_cont" id="projects">
            <h2 className="header">Projects:</h2>

            <div className="projects">
                {projs_DOM.map((proj) => {
                    return proj;
                })}
            </div>
        </section>
    );
};

export default Projects;
