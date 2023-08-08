import { FC, useEffect, useRef, useState } from "react";

interface Props {
    text_before: string;
    text_typed: string;
    delay: number;
    infinite: boolean;
}

const AnimatedWords: FC<Props> = ({
    text_before,
    text_typed,
    delay,
    infinite,
}) => {
    const div_ref = useRef<HTMLDivElement | null>(null);

    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (currentIndex <= text_typed.length) {
            timeout = setTimeout(() => {
                setCurrentText(
                    (prevText) => prevText + text_typed[currentIndex]
                );
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);
        } else if (infinite) {
            setCurrentIndex(0);
            setCurrentText("");
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text_typed]);

    return (
        <p
            ref={div_ref}
            // onLoad={() => wordflick()}
            className="text-lg text-white w-fit mx-auto relative 
            \ after:content-['\_'] after:absolute after:-right-3 after:bottom-[2px] after:max-h-full 
            \ after:font-bold after:animate-pulse-fast
            "
        >
            {text_before}
            {currentText}
        </p>
    );
};

export default AnimatedWords;
