import { FC } from "react";

import prof_pic from "../assets/images/profile_picture.jpg";
import AnimatedBg from "./AnimatedBg";
import AnimatedWords from "./AnimatedWords";

interface Props {}

const Intro: FC<Props> = () => {
    return (
        <section
            className="bg-gray-950 text-white flex flex-col justify-center px-2 relative bg-ellipsis-night-b row-span-1
            min-h-screen
            "
            id="intro"
        >
            <AnimatedBg />

            <AnimatedWords
                text_before={"I am a "}
                text_typed={"Fullstack web developer"}
                delay={150}
                delay_reverse={200}
                infinite={true}
            />

            <div className="max-w-[80vw] mx-auto py-[40px] show-up px-4">
                <h2 className="text-center text-lg font-bold">About me</h2>

                <div className="details">
                    <p>
                        Hello! My name is Filipy, and I am a full-stack web
                        developer. I am passionate about programming in general,
                        so I'm always improving and pushing myself to learn more
                        about it :).
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Intro;
