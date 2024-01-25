import React, { useState, useRef, useEffect } from "react";
import "./DrawRectangleContent.css";
import PropTypes from "prop-types";

const DrawRectangleContent = ({ imageUrl, lineWidth = 2 }) => {
  const [rectangles, setRectangles] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const rectangleRef = useRef(null);

  useEffect(() => {
    const rectangleCanvas = rectangleRef.current;
    const ctx = rectangleCanvas.getContext("2d");

    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      rectangleCanvas.width = image.width;
      rectangleCanvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);

      rectangles.forEach((rectangle) => {
        drawRectangle(
          ctx,
          rectangle.start,
          rectangle.end,
          rectangle.color,
          lineWidth
        );
      });
    };
  }, [imageUrl, rectangles, lineWidth]);

  const startDrawing = (e) => {
    e.preventDefault();
    setDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setRectangles((prevRectangles) => [
      ...prevRectangles,
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
    setRectangles((prevRectangles) => {
      const updatedRectangles = [...prevRectangles];
      const lastIndex = updatedRectangles.length - 1;
      updatedRectangles[lastIndex].end = { x: offsetX, y: offsetY };
      return updatedRectangles;
    });
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const drawRectangle = (context, start, end, color, width) => {
    context.beginPath();
    context.rect(start.x, start.y, end.x - start.x, end.y - start.y);
    context.strokeStyle = color;
    context.lineWidth = width;
    context.stroke();
    context.closePath();
  };

  return (
    <div className="draw-rectangle-container">
      <canvas
        className="canvas-for-draw-rectangle-content"
        ref={rectangleRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
    </div>
  );
};

DrawRectangleContent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  lineWidth: PropTypes.number,
};

export default DrawRectangleContent;
