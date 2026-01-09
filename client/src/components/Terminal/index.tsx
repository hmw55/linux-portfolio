import "./terminal.css";

export default function Terminal() {
    return (
        <div className="terminal__window">
            <div className="terminal__titlebar">
                <span className="terminal__title">mack@portfolio - terminal</span>
            </div>

            <div className="terminal__body">
                <pre className="terminal__boot">
                    Linux Portfolio OS

                    user: mack
                    host: portfolio
                    shell: portfolio-sh

                    Type 'help' to get started.
                </pre>
            </div>
        </div>
    )
}