import React, { useState, useRef, useEffect } from "react";
import "./DrawArrowContent.css";
import PropTypes from "prop-types";

const DrawArrowContent = ({ imageUrl }) => {
  const [arrows, setArrows] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const arrowRef = useRef(null);

  useEffect(() => {
    const arrowCanvas = arrowRef.current;
    const ctx = arrowCanvas.getContext("2d");

    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      arrowCanvas.width = image.width;
      arrowCanvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);

      arrows.forEach((arrow) => {
        drawArrow(ctx, arrow.start, arrow.end, arrow.color);
      });
    };
  }, [imageUrl, arrows]);

  const startDrawing = (e) => {
    e.preventDefault();
    setDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setArrows((prevArrows) => [
      ...prevArrows,
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
    setArrows((prevArrows) => {
      const updatedArrows = [...prevArrows];
      const lastIndex = updatedArrows.length - 1;
      updatedArrows[lastIndex].end = { x: offsetX, y: offsetY };
      return updatedArrows;
    });
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const drawArrow = (context, start, end, color) => {
    const headSize = 10;
    const angle = Math.atan2(end.y - start.y, end.x - start.x);

    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);

    // Draw arrowhead
    context.lineTo(
      end.x - headSize * Math.cos(angle - Math.PI / 6),
      end.y - headSize * Math.sin(angle - Math.PI / 6)
    );

    context.moveTo(end.x, end.y);
    context.lineTo(
      end.x - headSize * Math.cos(angle + Math.PI / 6),
      end.y - headSize * Math.sin(angle + Math.PI / 6)
    );

    context.strokeStyle = color;
    context.lineWidth = 8;
    context.stroke();
    context.closePath();
  };

  return (
    <div className="draw-arrow-container">
      <canvas
        className="canvas-for-draw-arrow-content"
        ref={arrowRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
    </div>
  );
};

DrawArrowContent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default DrawArrowContent;
