import { useEffect, useRef } from 'react';

export function BlueprintBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBlueprint();
    };

    const drawBlueprint = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Blueprint paper color
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#2a2a2a';
      ctx.lineWidth = 0.5;

      // Draw technical grid
      const gridSize = 30;
      ctx.strokeStyle = 'rgba(42, 42, 42, 0.15)';
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      ctx.strokeStyle = '#2a2a2a';
      ctx.lineWidth = 1;

      // Draw various technical elements scattered across the background
      const elements = [
        // Gears
        { type: 'gear', x: 150, y: 100, r: 40, teeth: 12 },
        { type: 'gear', x: canvas.width - 200, y: 150, r: 50, teeth: 16 },
        { type: 'gear', x: 200, y: canvas.height - 200, r: 35, teeth: 10 },
        { type: 'gear', x: canvas.width - 150, y: canvas.height - 150, r: 45, teeth: 14 },
        
        // Circles with crosshairs
        { type: 'circle', x: canvas.width / 2 + 300, y: 120, r: 60 },
        { type: 'circle', x: canvas.width / 2 - 400, y: canvas.height - 180, r: 50 },
        { type: 'circle', x: 120, y: canvas.height / 2, r: 40 },
      ];

      elements.forEach(elem => {
        if (elem.type === 'gear') {
          drawGear(ctx, elem.x, elem.y, elem.r, elem.teeth);
        } else if (elem.type === 'circle') {
          drawTechnicalCircle(ctx, elem.x, elem.y, elem.r);
        }
      });

      // Add dimension lines
      drawDimensionLine(ctx, 100, 50, 400, 50);
      drawDimensionLine(ctx, canvas.width - 400, canvas.height - 80, canvas.width - 100, canvas.height - 80);
    };

    const drawGear = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, teeth: number) => {
      const innerRadius = radius * 0.7;
      const toothHeight = radius * 0.2;

      ctx.save();
      ctx.translate(x, y);

      // Outer circle
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Inner circle
      ctx.beginPath();
      ctx.arc(0, 0, innerRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Center crosshair
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(10, 0);
      ctx.moveTo(0, -10);
      ctx.lineTo(0, 10);
      ctx.stroke();

      // Draw teeth
      for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * Math.PI * 2;
        const nextAngle = ((i + 0.5) / teeth) * Math.PI * 2;
        
        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
        ctx.lineTo(Math.cos(angle) * (radius + toothHeight), Math.sin(angle) * (radius + toothHeight));
        ctx.lineTo(Math.cos(nextAngle) * (radius + toothHeight), Math.sin(nextAngle) * (radius + toothHeight));
        ctx.lineTo(Math.cos(nextAngle) * radius, Math.sin(nextAngle) * radius);
        ctx.stroke();
      }

      // Dashed construction lines
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(0, -radius - 20);
      ctx.lineTo(0, radius + 20);
      ctx.moveTo(-radius - 20, 0);
      ctx.lineTo(radius + 20, 0);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();
    };

    const drawTechnicalCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
      ctx.save();
      ctx.translate(x, y);

      // Main circle
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Inner circle
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.6, 0, Math.PI * 2);
      ctx.stroke();

      // Crosshair
      ctx.beginPath();
      ctx.moveTo(-radius, 0);
      ctx.lineTo(radius, 0);
      ctx.moveTo(0, -radius);
      ctx.lineTo(0, radius);
      ctx.stroke();

      // Diagonal construction lines (dashed)
      ctx.setLineDash([3, 3]);
      const diag = radius * 0.707;
      ctx.beginPath();
      ctx.moveTo(-diag, -diag);
      ctx.lineTo(diag, diag);
      ctx.moveTo(-diag, diag);
      ctx.lineTo(diag, -diag);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();
    };

    const drawDimensionLine = (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Arrows
      const angle = Math.atan2(y2 - y1, x2 - x1);
      const arrowLength = 10;
      
      // Left arrow
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1 + arrowLength * Math.cos(angle + 2.5), y1 + arrowLength * Math.sin(angle + 2.5));
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1 + arrowLength * Math.cos(angle - 2.5), y1 + arrowLength * Math.sin(angle - 2.5));
      ctx.stroke();

      // Right arrow
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - arrowLength * Math.cos(angle + 2.5), y2 - arrowLength * Math.sin(angle + 2.5));
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - arrowLength * Math.cos(angle - 2.5), y2 - arrowLength * Math.sin(angle - 2.5));
      ctx.stroke();
    };

    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
    />
  );
}
