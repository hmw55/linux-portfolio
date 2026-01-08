import { useEffect, useState } from "react";
import "./taskbar.css";

interface TaskbarProps {
    onLauncherClick: () => void;
}

function Taskbar({ onLauncherClick }: TaskbarProps) {
    const [time, setTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Keyboard shortcut for launcher: Super+R
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key.toLowerCase() === "l" && e.metaKey) {
                e.preventDefault();
                onLauncherClick();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onLauncherClick]);

    return (
        <div className="taskbar">
            <button className="taskbar__launcher" onClick={onLauncherClick}>
                🖥 Launch
            </button>
            <div className="taskbar__time">{time.toLocaleTimeString()}</div>
        </div>
    );
}

export default Taskbar;