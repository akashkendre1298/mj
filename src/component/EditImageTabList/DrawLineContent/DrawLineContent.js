import React, { useState, useRef, useEffect } from "react";
import "./DrawLineContent.css";
import PropTypes from "prop-types";

const DrawLineContent = ({ imageUrl }) => {
  const [lines, setLines] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Draw the image on the canvas
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);

      // Draw existing lines
      lines.forEach((line) => {
        drawLine(ctx, line.start, line.end, line.color);
      });
    };
  }, [imageUrl, lines]);

  const startDrawing = (e) => {
    e.preventDefault(); // Prevent default dragging behavior
    setDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setLines((prevLines) => [
      ...prevLines,
      {
        start: { x: offsetX, y: offsetY },
        end: { x: offsetX, y: offsetY },
        color: "black",
      },
    ]);
  };

  const draw = (e) => {
    if (!drawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    setLines((prevLines) => {
      const updatedLines = [...prevLines];
      const lastIndex = updatedLines.length - 1;
      updatedLines[lastIndex].end = { x: offsetX, y: offsetY };
      return updatedLines;
    });
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const drawLine = (context, start, end, color) => {
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.strokeStyle = color;
    context.lineWidth = 5;
    context.stroke();
    context.closePath();
  };

  return (
    <>
      <div className="container-for-draw-line-content-component">
        <div className="draw-line-container">
          <canvas
            className="canvas-for-draw-line-content"
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
          />
        </div>
      </div>
    </>
  );
};

DrawLineContent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default DrawLineContent;
