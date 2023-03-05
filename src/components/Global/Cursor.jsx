import React, { useEffect } from "react";
import { useContext } from "react";
import useMousePosition from "hooks/useMousePosition";

const Cursor = () => {

    const { x, y, delayX, delayY } = useMousePosition();
    let [isClicking, setIsClicking] = React.useState(false);
    let mouseRef = React.useRef(null);
    let dotRef = React.useRef(null);

    useEffect(() => {
        if (!mouseRef.current) return;
        if (!dotRef.current) return;
        let cursor = mouseRef.current;
        let cursorDot = dotRef.current;

        const mouseOut = e => {
            cursor.style.opacity = 0;
        }

        const mouseOver = e => {
            cursor.style.opacity = 1;
        }

        const onLink = e => {
            cursorDot.style.transform = "scale(5)";
        }

        const offLink = e => {
            cursorDot.style.transform = "scale(1)";
        }

        const click = e => {
            setIsClicking(true);
            setTimeout(() => {
                setIsClicking(false);
            }, 100);
        }

        document.addEventListener("mouseout", mouseOut);
        document.addEventListener("mouseover", mouseOver);
        document.addEventListener("click", click);


        return () => {
            window.removeEventListener("mouseout", mouseOut);
            window.removeEventListener("mouseover", mouseOver);
            window.removeEventListener("click", click);
        }
    }, [mouseRef]);


    return (
        <>
            <div
                ref={mouseRef}
            >
                <div className="w-full h-full flex justify-center items-center">
                    <div
                        className="bg-primary rounded-full w-2 h-2 fixed pointer-events-none"
                        style={{ 
                            left: x, 
                            top: y 
                        }}
                        ref={dotRef}
                    />
                </div>
            </div>
        </>
    );
};

export default Cursor;
