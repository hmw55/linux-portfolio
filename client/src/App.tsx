import { useState } from "react";
import Desktop from "./components/Desktop";
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";

import CalculatorApp from "./apps/Calculator";

function App() {
  const [showCalculator, setShowCalculator] = useState(false);

  const handleLauncher = () => {
    setShowCalculator(prev => !prev); //temp calc toggle
  };

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

      <Taskbar onLauncherClick={handleLauncher} />
    </Desktop>     
  )
 
}

export default App;
