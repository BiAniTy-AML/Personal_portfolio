import { FC } from "react";

interface Props {}

const Skills: FC<Props> = () => {
    const known_tech: string[][] = [
        [
            "Javascript",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        ],
        [
            "Typescript",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        ],
        [
            "React",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        ],
        [
            "CSS",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        ],
        [
            "HTML",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        ],
        [
            "SASS",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        ],
        [
            "Webpack",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
        ],
    ];

    return (
        <section
            className="md:row-start-2 md:row-span-1 md:col-start-2 md:col-span-1
            min-h-screen
            "
            id="skills"
        >
            <h2 className="header">Skills:</h2>

            <div className="known_tech">
                {known_tech.map(([name, url]) => (
                    <div key={name + url} className="tech">
                        <img
                            src={url}
                            alt={`${name} logo`}
                            className="w-10 h-10"
                        />

                        <div className="name">{name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
