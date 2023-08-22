"use client";

import React, { useRef, useState, useEffect } from "react";
import MousePosition from "../utils/mouse-position";

type SpotlightProps = {
    children: React.ReactNode;
    className?: string;
};

const Spotlight = ({ children, className = "" }: SpotlightProps) => {
    const container_ref = useRef<HTMLDivElement>(null);
    const mouse_position = MousePosition();
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const container_size = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
    const [boxes, set_boxes] = useState<Array<HTMLElement>>([]);

    useEffect(() => {
        container_ref.current &&
            set_boxes(
                Array.from(container_ref.current.children).map(
                    (el) => el as HTMLElement
                )
            );
    }, []);

    useEffect(() => {
        init_container();
        window.addEventListener("resize", init_container);

        return () => {
            window.removeEventListener("resize", init_container);
        };
    }, [set_boxes]);

    useEffect(() => {
        on_mouse_move();
    }, [mouse_position]);

    const init_container = () => {
        if (container_ref.current) {
            container_size.current.w = container_ref.current.offsetWidth;
            container_size.current.h = container_ref.current.offsetHeight;
        }
    };

    const on_mouse_move = () => {
        if (container_ref.current) {
            const rect = container_ref.current.getBoundingClientRect();
            const { w, h } = container_size.current;
            const x = mouse_position.x - rect.left;
            const y = mouse_position.y - rect.top;
            const inside = x < w && x > 0 && y < h && y > 0;

            if (inside) {
                mouse.current.x = x;
                mouse.current.y = y;
                boxes.forEach((box) => {
                    const boxX =
                        -(box.getBoundingClientRect().left - rect.left) +
                        mouse.current.x;
                    const boxY =
                        -(box.getBoundingClientRect().top - rect.top) +
                        mouse.current.y;
                    box.style.setProperty("--mouse-x", `${boxX}px`);
                    box.style.setProperty("--mouse-y", `${boxY}px`);
                });
            }
        }
    };

    return (
        <div className={className} ref={container_ref}>
            {children}
        </div>
    );
};

type SpotlightCardProps = {
    children: React.ReactNode;
    className?: string;
};

const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
    return (
        <div
            className={`relative h-full bg-slate-800 rounded-3xl p-px 
            before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full 
            before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 
            before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] 
            after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none 
            after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 
            after:blur-[100px] overflow-hidden ${className}
            `}
        >
            {children}
        </div>
    );
};

export default Spotlight;

export { SpotlightCard };
