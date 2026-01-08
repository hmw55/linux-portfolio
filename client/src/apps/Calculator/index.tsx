import { useState } from "react";
import "./calculator.css";

function CalculatorApp() {
    const [display, setDisplay] = useState("");

    function handleButtonClick(value: string) {
        if (value === "C") {
            setDisplay("");
        } else if (value === "=") {
            try {
                setDisplay(eval(display).toString());
            } catch {
                setDisplay("Error");
            }
        } else {
            setDisplay(prev => prev + value);
        }
    }

    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+",
        "C"
    ];

    return (
        <div className="calculator">
            <div className="calculator__display">{display || "0"}</div>
            <div className="calculator__buttons">
                {buttons.map((btn) => (
                    <button
                        key={btn}
                        onClick={() => handleButtonClick(btn)}
                        className="calculator__button"
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CalculatorApp;