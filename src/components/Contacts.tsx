import { FC } from "react";

// import phone_icon from "../assets/icons/phone.svg";
// import email_icon from "../assets/icons/mail.svg";
import {
    github as github_icon,
    linkedin as linkedin_icon,
    phone as phone_icon,
    email as email_icon,
} from "../utils/icons";
import Spotlight, { SpotlightCard } from "./Spotlight";

interface Props {}

const Contacts: FC<Props> = () => {
    return (
        <section
            className="md:row-start-4 md:row-span-1 md:col-start-2 md:col-span-1
            min-h-screen section relative
            "
            id="contacts"
        >
            <h2 className="section-header">Contact me!</h2>

            <p className="text-center text-lg mb-4">
                Please get in touch if you think we could work together!
            </p>

            <div className="flex flex-col gap-4">
                {[
                    ["+55 (19)971610074", phone_icon],
                    ["filipytav17@gmail.com", email_icon],
                ].map(([content, image]) => (
                    <div
                        //@ts-ignore
                        key={content}
                        className="flex gap-2 justify-center items-center"
                    >
                        {/*
                        <img src={image} alt="" className="" />
                        */}

                        {image}

                        <p className="text-lg">{content}</p>
                    </div>
                ))}
            </div>

            <Spotlight className="p-1 mt-2">
                <SpotlightCard className="p-10 text-lg">
                    “The best thing about a boolean is even if you are wrong,
                    you are only off by a bit.”
                </SpotlightCard>
            </Spotlight>

            <div
                className="flex gap-16 mx-auto max-w-fit
                 mt-[15%] my-auto
                 "
                // absolute bottom-10 left-1/2 -translate-x-1/2
            >
                {[
                    ["https://github.com/FilipyTav", github_icon],
                    [
                        "https://www.linkedin.com/in/filipy-tavares-208809256/",
                        linkedin_icon,
                    ],
                ].map(([link, img]) => (
                    //@ts-ignore
                    <a key={link} href={link}>
                        {/*
                        <img src={img} alt="" className="w-[50px] h-[50px]" />
                        */}

                        {img}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contacts;
