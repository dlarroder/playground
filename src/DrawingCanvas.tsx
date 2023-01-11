import React, {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

interface DrawingCanvasProps {
  children?: ReactNode;
}

export function DrawingCanvas({ children }: DrawingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const { current: canvas } = canvasRef;

    if (canvas && window) {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const context = canvas.getContext('2d');
      if (context) {
        context.scale(2, 2);
        context.lineCap;
        context.strokeStyle = 'black';
        context.lineWidth = 5;
        contextRef.current = context;
      }
    }
  }, []);

  const startDrawing: MouseEventHandler<HTMLCanvasElement> = ({
    nativeEvent,
  }) => {
    const { offsetX, offsetY } = nativeEvent;
    if (contextRef.current) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
    }

    setIsDrawing(true);
  };

  const finishDrawing = () => {
    if (contextRef.current) {
      contextRef.current.closePath();
    }
    setIsDrawing(false);
  };

  const draw: MouseEventHandler<HTMLCanvasElement> = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    if (contextRef.current) {
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };
  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
      style={{ zIndex: 99 }}
    >
      {children}
    </canvas>
  );
}
