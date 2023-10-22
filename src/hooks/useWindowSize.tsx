import { useState, useEffect } from "react";

interface sizes {
    width:number | undefined,
    height:number | undefined
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<sizes>({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== "undefined") {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
};

export default useWindowSize;