import "./desktop.css"

interface DesktopProps {
    children?: React.ReactNode;
    backgroundUrl?: string;
}

function Desktop({ children, backgroundUrl }: DesktopProps) {
    return (
        <div 
            className="desktop"
            style={{
                backgroundImage: backgroundUrl
                    ? `url(${backgroundUrl})`
                    : undefined,
            }}
            >
            {children}
        </div>
    )
}

export default Desktop;