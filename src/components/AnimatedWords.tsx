import { FC, useEffect, useRef, useState } from "react";

interface Props {
    text_before: string;
    text_typed: string;
    delay: number;
    delay_reverse: number;
    delay_between?: number;
    infinite: boolean;
}

const AnimatedWords: FC<Props> = ({
    text_before,
    text_typed,
    delay,
    delay_reverse,
    delay_between = 1000,
    infinite,
}) => {
    const div_ref = useRef<HTMLDivElement | null>(null);

    const [current_text, set_current_text] = useState("");
    const [current_index, set_current_index] = useState(0);
    const [reverse_index, set_reverse_index] = useState(0);

    const clear_timeouts = (timeouts: NodeJS.Timeout[]) => {
        timeouts.forEach((timeout) => {
            clearTimeout(timeout);
        });
    };

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (current_index <= text_typed.length) {
            timeout = setTimeout(() => {
                set_current_text(
                    (prevText) => prevText + text_typed[current_index]
                );
                set_current_index((prevIndex) => prevIndex + 1);
            }, delay);

            if (current_index === text_typed.length) {
                clearTimeout(timeout);

                set_current_index((prevIndex) => prevIndex + 1);

                setTimeout(() => {
                    set_reverse_index(text_typed.length);
                }, delay_between);
            }
        } else if (infinite && reverse_index > 0) {
            timeout = setTimeout(() => {
                set_current_text((prevText) => prevText.slice(0, -1));
                set_reverse_index((prev_index) => prev_index - 1);
            }, delay_reverse);

            if (reverse_index === 1) {
                setTimeout(() => {
                    set_current_index(0);
                    set_current_text("");
                    set_reverse_index(0);
                    clearTimeout(timeout);
                }, delay_between);
            }
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [
        current_index,
        delay,
        delay_reverse,
        delay_between,
        infinite,
        text_typed,
        reverse_index,
    ]);

    return (
        <p
            ref={div_ref}
            // onLoad={() => wordflick()}
            className="text-2xl text-white w-fit mx-auto relative min-h-[4em]"
        >
            {text_before}
            {current_text}
            <span className="font-bold animate-pulse-fast text-2xl inline-block -translate-y-[6px]">
                _
            </span>
        </p>
    );
};

export default AnimatedWords;
