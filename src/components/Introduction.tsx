import { FC } from "react";

import prof_pic from "../assets/images/profile_picture.jpg";
import AnimatedWords from "./AnimatedWords";

interface Props {}

const Intro: FC<Props> = () => {
    return (
        <section
            className="bg-gray-950 text-white flex flex-col justify-center px-2"
            id="intro"
        >
            {/* Photo by <a href="https://unsplash.com/@degleex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Degleex</a> on <a href="https://unsplash.com/s/photos/background-forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}

            {/*
            <img src={prof_pic} alt="" className="w-1/2 h-auto mx-auto" />
            */}

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
