import { FC, ReactElement, useState } from "react";

interface Props {}

const Navbar: FC<Props> = () => {
    const [list_active, set_list_active] = useState<boolean>(false);

    const mq: MediaQueryList = window.matchMedia("(min-width: 40em)");

    const [screen_size, set_screen_size] = useState<"small" | "big">(
        mq.matches ? "big" : "small"
    );

    mq.addEventListener("change", (e) => {
        set_screen_size(e.matches ? "big" : "small");
    });

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
        <nav
            className="
            \ bg-slate-950 text-violet-500 h-screen grid place-items-center 
            \ md:sticky md:top-0 md:bottom-0 md:left-0"
        >
            {/*
            <div className="my_name bg-red-50">Filipy</div>
            */}

            <div
                className={`w-full section_list_container ${
                    list_active ? "active" : ""
                }`}
            >
                {/*
                <div
                    className="sections_icon"
                    onClick={() =>
                        set_list_active((prev_state) => {
                            return !prev_state;
                        })
                    }
                >
                    {screen_size === "small" ? arrow_down : ""}
                </div>
                */}

                <ul className="flex flex-col text-center gap-1">
                    {[["Intro"], ["Skills"], ["Projects"], ["Contacts"]].map(
                        ([title]) => (
                            <li
                                onClick={disable_sections_list}
                                className="relative backdrop-blur-lg text-shadow-sm shadow-violet-500 overflow-hidden shadow-[0px_0px_50px_-7px] 
                                \ before:content-[''] before:absolute before:-left-1/2 before:w-1/3 before:h-[150%] before:-top-1/4 before:opacity-70
                                \ before:skew-x-[45deg] before:bg-gradient-to-r before:from-transparent before:to-violet-50
                                \ before:transition-left before:hover:left-[125%] before:duration-[900ms] before:ease-out before:blur-[2px]
                                \ before:pointer-events-none
"
                            >
                                <a
                                    href={`#${title.toLowerCase()}`}
                                    className="full-anchor px-16 py-10 text-2xl border-sky-50"
                                >
                                    {title}
                                </a>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
