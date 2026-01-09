import { useState } from "react";
import Desktop from "./components/Desktop";
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";
import { apps } from "./apps/registry";
import type { AppEntry } from "./apps/registry";

interface OpenApp {
  app: AppEntry;
  zIndex: number;
  initialX?: number;
  initialY?: number;
  width?: number;
  height?: number;
  floating?: boolean;
}

function App() {
  const [openApps, setOpenApps] = useState<OpenApp[]>([]);
  const [topZIndex, setTopZIndex] = useState(1);

  const openApp = (app: AppEntry) => {
    if (openApps.find(a => a.app.id === app.id)) return;

    setOpenApps(prev => [
      ...prev,
      {
        app,
        zIndex: topZIndex + 1,
        initialX: 200, // you can later use windowRules
        initialY: 150,
        width: 320,
        height: 400,
        floating: true,
      },
    ]);
    setTopZIndex(prev => prev + 1);
  };

  const closeApp = (id: string) => {
    setOpenApps(prev => prev.filter(a => a.app.id !== id));
  };

  const bringToFront = (id: string) => {
    setTopZIndex(prev => prev + 1);
    setOpenApps(prev =>
      prev.map(a =>
        a.app.id === id ? { ...a, zIndex: topZIndex + 1 } : a
      )
    );
  };

  const handleLauncher = () => {
    const calc = apps.find(a => a.id === "calculator");
    if (calc) openApp(calc);
  };

  return (
    <Desktop>
      {openApps.map(({ app, zIndex, initialX, initialY, width, height, floating }) => (
        <Window
          key={app.id}
          title={app.name}
          onClose={() => closeApp(app.id)}
          zIndex={zIndex}
          initialX={initialX}
          initialY={initialY}
          width={width}
          height={height}
          floating={floating}
          onMouseDown={() => bringToFront(app.id)}
        >
          <app.component />
        </Window>
      ))}

      <Taskbar onLauncherClick={handleLauncher} />
    </Desktop>
  );
}

export default App;
