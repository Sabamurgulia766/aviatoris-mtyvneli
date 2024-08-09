import React, { useEffect, useRef } from 'react';
import { Star,  } from '../utils/star'; // Adjust the path as necessary

const StarFieldComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
  console.log('rerender')

    if (!canvasRef.current) return;

    const outerspace = canvasRef.current;
    const mainContext = outerspace.getContext('2d');
    if (!mainContext) return;
    console.log('draw')

    const canvasWidth = 1000;
    const canvasHeight = 500;

    // // Set canvas dimensions
    outerspace.width = canvasWidth;
    outerspace.height = canvasHeight;

    const centerX = canvasWidth * 0.5;
    const centerY = canvasHeight * 0.5;

    const numberOfStars = 200;

    const stars: Star[] = [];

    for (let i = 0; i < numberOfStars; i++) {
      const star = new Star(mainContext);
      stars.push(star);
    }

    function draw() {
        if (!mainContext) return;

        mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
      mainContext.fillStyle = "#111";
      mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

      mainContext.translate(centerX, centerY);

      stars.forEach(star => star.drawStar());

      mainContext.translate(-centerX, -centerY);

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} id="outerspace" height="500" width="1000"></canvas>
    </div>
  );
};

export default StarFieldComponent;
