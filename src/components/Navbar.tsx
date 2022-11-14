import React, { FC } from "react";

interface Props {}

const Navbar: FC<Props> = () => {
    return (
        <nav>
            <div className="my_name">Filipy</div>

            <ul className="sections">
                <li>
                    <a href="#intro">Intro</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contacts">Contacts</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
