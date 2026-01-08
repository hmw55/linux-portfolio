import "./desktop.css"

interface DesktopProps {
    children?: React.ReactNode;
}

function Desktop({ children }: DesktopProps) {
    return <div className="desktop">{children}</div>
}

export default Desktop;