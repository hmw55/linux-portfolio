import { useRef, useState, useEffect } from "react";
import "./window.css";

interface WindowProps {
  title: string;
  children?: React.ReactNode;
  onClose?: () => void;
  zIndex?: number;
  initialX?: number;
  initialY?: number;
  width?: number;
  height?: number;
  floating?: boolean;
  onMouseDown?: () => void; // <-- added
}

function Window({
  title,
  children,
  onClose,
  zIndex = 1,
  initialX,
  initialY,
  width,
  height,
  floating = true,
  onMouseDown,
}: WindowProps) {
  const [position, setPosition] = useState({ x: initialX ?? 100, y: initialY ?? 100 });
  const size = { width: width ?? 320, height: height ?? 400 }; // read-only for now
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  function onDragMouseDown(e: React.MouseEvent) {
    if (!floating) return;
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    e.preventDefault();
  }

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!dragging.current) return;
      setPosition({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
    }
    function onMouseUp() {
      dragging.current = false;
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div
      className="window"
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
      }}
    >
      <div className="window__titlebar" onMouseDown={(e) => { onMouseDown && onMouseDown(); onDragMouseDown(e); }}>
        <span className="window__title">{title}</span>
        <button className="window__close" onClick={() => onClose && onClose()}>✕</button>
      </div>
      <div className="window__content">{children}</div>
    </div>
  );
}

export default Window;