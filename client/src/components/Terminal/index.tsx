import { useState } from "react";
import "./terminal.css";

export default function Terminal() {
    const [history, setHistory] = useState<string[]>([]);
    const [input, setInput] = useState("");

    function handleSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key !== "Enter") return;

        e.preventDefault();

        if (input.trim() == "") return;

        setHistory(prev => [...prev, input]);
        setInput("");
    }

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

                {history.map((line, i) => (
                    <div className="terminal__line" key={i}>
                        <span className="prompt">[mack@portfolio ~]$</span>
                        <span className="terminal__command">{line}</span>
                    </div>
                ))}

                <div className="terminal__prompt">
                    <span className="prompt">[mack@portfolio ~]$</span>
                    <input 
                        className="terminal__input"
                        value={input} 
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleSubmit}
                        autoFocus
                        spellCheck={false}
                    />
                </div>
            </div>
        </div>
    );
}

