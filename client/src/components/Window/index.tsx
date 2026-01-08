import { useRef, useState, useEffect } from "react";
import "./window.css";

interface WindowProps {
    title: string;
    children?: React.ReactNode;
}

function Window({ title, children }: WindowProps) {
    const [position, setPosition] = useState({ x: 200, y: 150 });
    const dragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });

    // Mouse down starts drag
    function onMouseDown(e: React.MouseEvent) {
        dragging.current = true;
        offset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
    };
    e.preventDefault();
    }

    // Move handler attached globally
    useEffect(() => {
        function onMouseMove(e: MouseEvent) {
        if (!dragging.current) return;

        setPosition({
            x: e.clientX - offset.current.x,
            y: e.clientY - offset.current.y,
        });
    }

    function onMouseUp() {
        dragging.current = false;
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    };
    }, []);

    return (
        <div
            className="window"
            style={{
                left: position.x,
                top: position.y,
            }}
        >
            <div className="window__titlebar" onMouseDown={onMouseDown}>
                <span className="window__title">{title}</span>
            </div>
            <div className="window__content">{children}</div>
        </div>
  );
}

export default Window;
