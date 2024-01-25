import React, { useState, useRef, useEffect } from "react";
import "./DrawOvalContent.css";
import PropTypes from "prop-types";

const DrawOvalContent = ({ imageUrl, lineWidth = 8 }) => {
  const [ovals, setOvals] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const ovalRef = useRef(null);

  useEffect(() => {
    const ovalCanvas = ovalRef.current;
    const ctx = ovalCanvas.getContext("2d");

    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      ovalCanvas.width = image.width;
      ovalCanvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);

      ovals.forEach((oval) => {
        drawOval(ctx, oval.start, oval.end, oval.color, lineWidth);
      });
    };
  }, [imageUrl, ovals, lineWidth]);

  const startDrawing = (e) => {
    e.preventDefault();
    setDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setOvals((prevOvals) => [
      ...prevOvals,
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
    setOvals((prevOvals) => {
      const updatedOvals = [...prevOvals];
      const lastIndex = updatedOvals.length - 1;
      updatedOvals[lastIndex].end = { x: offsetX, y: offsetY };
      return updatedOvals;
    });
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const drawOval = (context, start, end, color, width) => {
    context.beginPath();
    const radiusX = Math.abs(end.x - start.x) / 2;
    const radiusY = Math.abs(end.y - start.y) / 2;
    const centerX = Math.min(start.x, end.x) + radiusX;
    const centerY = Math.min(start.y, end.y) + radiusY;

    context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
    context.strokeStyle = color;
    context.lineWidth = width;
    context.stroke();
    context.closePath();
  };

  return (
    <div className="draw-oval-container">
      <canvas
        className="canvas-for-draw-oval-content"
        ref={ovalRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
    </div>
  );
};

DrawOvalContent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  lineWidth: PropTypes.number,
};

export default DrawOvalContent;
