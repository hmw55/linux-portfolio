import { useState } from "react";
import "./terminal.css";

type TerminalEntry = {
    type: "command" | "output";
    text: string;
}

export default function Terminal() {
    const [history, setHistory] = useState<TerminalEntry[]>([]);
    const [input, setInput] = useState("");

    function handleSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key !== "Enter") return;

        e.preventDefault();

        if (input.trim() == "") return;

        const newHistory: TerminalEntry[] = [...history, { type: "command", text: input }];

        if (input.trim().toLowerCase() === "help") {
            newHistory.push(
                { type: "output", text: "Available commands:"},
                { type: "output", text: "help       → Show this message"},
                { type: "output", text: "ls         → List files in home directory"},
                { type: "output", text: "clear      → Clear the terminal"},
                { type: "output", text: "Use Super+L to open the app launcher."},
            );
        }

        setHistory(newHistory);
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

                {history.map((entry, i) => 
                    entry.type === "command" ? (
                        <div className="terminal__line" key={i}>
                            <span className="prompt">[mack@portfolio ~]$</span>
                            <span className="terminal__command">
                                {entry.text}
                            </span>
                        </div>
                ) : (
                    <div className="termain__line terminal__output" key={i}>
                        {entry.text}
                    </div>
                    )
                )}

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

