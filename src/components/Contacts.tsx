import { FC } from "react";

import phone_img from "../assets/icons/phone.svg";
import email_img from "../assets/icons/mail.svg";

interface Props {}

const Contacts: FC<Props> = () => {
    return (
        <section className="contacts_container section_cont" id="contacts">
            <h2 className="header">Contact me!</h2>

            <div className="contacts">
                <p>Please get in touch if you think we could work together!</p>

                <div className="contact phone ">
                    <img src={phone_img} alt="" className="icon" />
                    <div>+55 (19)971610074</div>
                </div>

                <div className="contact email ">
                    <img src={email_img} alt="" className="icon" />
                    <div>filipytav17@gmail.com</div>
                </div>
            </div>

            <div className="footer icons">
                <a href="https://github.com/FilipyTav">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt=""
                        className="icon"
                    />
                </a>

                <a href="https://www.linkedin.com/in/filipy-tavares-208809256/">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                        alt=""
                        className="icon"
                    />
                </a>
            </div>
        </section>
    );
};

export default Contacts;
