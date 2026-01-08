import { useState } from "react";
import Desktop from "./components/Desktop";

import Window from "./components/Window";

import CalculatorApp from "./apps/Calculator";

function App() {
  
  const [showCalculator, setShowCalculator] = useState(true);

  return (
    <Desktop>
      {showCalculator && (
        <Window 
          title="Calculator"
          onClose={() => setShowCalculator(false)}
          zIndex={1}
        >
          <CalculatorApp />
        </Window>
      )}

      <button
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          padding: "6px 12px",
        }}
        onClick={() => setShowCalculator(true)}
      >
        Open Calculator
      </button>

    </Desktop>
  );
}

export default App;
