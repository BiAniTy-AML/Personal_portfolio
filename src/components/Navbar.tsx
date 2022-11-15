import { FC, ReactElement, useState } from "react";

interface Props {}

const Navbar: FC<Props> = () => {
    const [list_active, set_list_active] = useState<boolean>(false);

    const arrow_down: ReactElement = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );

    const disable_sections_list: () => void = () => {
        if (list_active) set_list_active(false);
    };

    return (
        <nav>
            <div className="my_name">Filipy</div>

            <div
                className={`section_list_container ${
                    list_active ? "active" : ""
                }`}
            >
                <div
                    className="sections_icon"
                    onClick={() =>
                        set_list_active((prev_state) => {
                            return !prev_state;
                        })
                    }
                >
                    {arrow_down}
                </div>

                <ul className="sections">
                    <li onClick={disable_sections_list}>
                        <a href="#intro">Intro</a>
                    </li>
                    <li onClick={disable_sections_list}>
                        <a href="#skills">Skills</a>
                    </li>
                    <li onClick={disable_sections_list}>
                        <a href="#projects">Projects</a>
                    </li>
                    <li onClick={disable_sections_list}>
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
