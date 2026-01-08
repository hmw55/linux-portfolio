import { useState } from "react";
import Desktop from "./components/Desktop";
import Window from "./components/Window";

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
          <p>Calculator coming soon...</p>
        </Window>
      )}

    </Desktop>
  );
}

export default App;
