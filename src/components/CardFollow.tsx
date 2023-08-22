import React, { useRef, useState, useEffect } from "react";
import MousePosition from "../utils/mouse-position";

type SpotlightProps = {
    children: React.ReactNode;
    className?: string;
};

const CardFollow = ({ children, className = "" }: SpotlightProps) => {
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

    const setSheenPosition = (x_ratio: number, y_ratio: number) => {
        // This creates a "distance" up to 400px each direction to offset the sheen
        const xOffset = 1 - (x_ratio - 0.5) * 800;
        const yOffset = 1 - (y_ratio - 0.5) * 800;

        container_ref.current?.style.setProperty("--sheenX", `${xOffset}px`);
        container_ref.current?.style.setProperty("--sheenY", `${yOffset}px`);
    };

    const on_mouse_move = () => {
        if (container_ref.current) {
            const rect = container_ref.current.getBoundingClientRect();
            const { w, h } = container_size.current;
            const x = mouse_position.x - rect.left;
            const y = mouse_position.y - rect.top;

            // Creates angles of (-20, -20) (left, bottom) and (20, 20) (right, top)
            const y_axis_degree = (x / w) * 40 - 20;
            const x_axis_degree = (y / h) * -1 * 40 + 20;

            const inside = x < w && x > 0 && y < h && y > 0;

            if (inside) {
                // container_ref.current!.style.transform = `rotateX(${xAxisDegree}deg)`;
                container_ref.current!.style.transform = `rotateY(${y_axis_degree}deg)`;
            }

            // Set the sheen position
            // setSheenPosition(x / w, y / w);
        }
    };

    return (
        <div
            className={`overflow-hidden relative
                        after:content-[''] after:absolute after:-top-[400px] after:-right-[400px] after:-bottom-[400px] after:-left-[400px]
                        after:bg-sheen after:translate-x-[var(--sheenX)] after:translate-y-[var(--sheenY)]
                        ${className}
                       `}
            ref={container_ref}
        >
            {children}
        </div>
    );
};

export default CardFollow;
