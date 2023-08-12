import { FC } from "react";

interface Props {}

const AnimatedBg: FC<Props> = () => {
    // const multiple_box_shadow = (n: number, range: number = 2000) => {
    //     let value: string = `shadow-[${random_range(range)}px_${random_range(
    //         range
    //     )}px`;

    //     for (let i = 1; i <= n; i++) {
    //         value = `${value},${random_range(range)}px_${random_range(
    //             range
    //         )}px`;
    //     }

    //     return value.concat("]");
    // };

    // console.log(multiple_box_shadow(2, 500));

    return (
        <div className="absolute all-0 overflow-hidden pointer-events-none">
            {/*
                Original idea by @screenshake
                https://codepen.io/anon/embed/LYGbwj?default-tab=result&height=500&slug-hash=BKJun&theme-id=1
            */}

            <div
                className={
                    `w-[0px] h-[1px] bg-transparent z-50 shadow-multiple-sm animate-star-sm
                 \ overflow-visible absolute shadow-white pointer-events-none
                `
                    // \ after:content-[''] after:absolute after:top-[2000px] after:w-[1px] after:h-[1px]
                    // \ after:bg-transparent after:shadow-multiple-sm after:shadow-white
                }
            ></div>

            <div
                className={
                    `w-[2px] h-[2px] bg-transparent z-50 shadow-multiple-md animate-star-md
                \ overflow-visible absolute shadow-white pointer-events-none
                `
                    // \ after:content-[''] after:absolute after:top-[2000px] after:w-[2px] after:h-[2px]
                    // \ after:bg-transparent after:shadow-multiple-md after:shadow-white
                }
            ></div>

            <div
                className={
                    `w-[3px] h-[3px] bg-transparent z-50 shadow-multiple-lg animate-star-lg
                \ overflow-visible absolute shadow-white pointer-events-none
                `
                    // \ after:content-[''] after:absolute after:top-[2000px] after:w-[2px] after:h-[2px]
                    // \ after:bg-transparent after:shadow-multiple-lg after:shadow-white
                }
            ></div>
        </div>
    );
};

export default AnimatedBg;
