import "./window.css";

interface WindowProps {
    title: string;
    children?: React.ReactNode;
}

function Window({ title, children}: WindowProps) {
    return (
        <div className="window">
            <div className="window__titlebar">
                <span className="window__title">{title}</span>
            </div>
            <div className="window__content">{children}</div>
        </div>
    );
}

export default Window;