import { FC } from "react";

import prof_pic from "../assets/images/profile_picture.jpg";

interface Props {}

const Intro: FC<Props> = () => {
    return (
        <section className="intro_container section_cont" id="intro">
            {/* Photo by <a href="https://unsplash.com/@degleex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Degleex</a> on <a href="https://unsplash.com/s/photos/background-forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
            <img src={prof_pic} alt="" className="profile_pic" />

            <div className="greetings">
                <h2 className="header">About me</h2>

                <div className="details">
                    <p>
                        Hello! My name is Filipy, and I am a self-taught
                        front-end web developer.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Intro;
