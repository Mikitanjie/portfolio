import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

export default function Particles() {
  const canvasRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 25; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speedX: Math.random() * 1 - 1,
          speedY: Math.random() * 1 - 1,
          size: Math.random() * 2 + 1,
        });
      }
    }

    createParticles();

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        // Draw the particles
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = theme === 'dark' ? 'rgb(193, 235, 176)' : 'transparent';
        ctx.fill();

        // Loop particles around the edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }

      requestAnimationFrame(drawParticles);
    }

    // Start the animation loop
    drawParticles();

    // Set an interval to recreate the particles every 2 minutes
    const intervalId = setInterval(createParticles, 2 * 60 * 1000); // 2 minutes in milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [theme]);

  return <canvas ref={canvasRef} id="canvas" />;
}
