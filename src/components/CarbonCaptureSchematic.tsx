import React, { useEffect, useRef, useState } from 'react';

interface HeatFlowParticle {
  x: number;
  y: number;
  progress: number;
  pathIndex: number;
}

export function CarbonCaptureSchematic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<HeatFlowParticle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 700;

    // Define heat flow paths
    const heatPaths = [
      // Path 1: Absorber to Heat Exchanger
      [
        { x: 300, y: 350 },
        { x: 400, y: 350 },
        { x: 500, y: 350 },
      ],
      // Path 2: Heat Exchanger vertical
      [
        { x: 500, y: 200 },
        { x: 500, y: 300 },
        { x: 500, y: 400 },
      ],
      // Path 3: Heat Exchanger to Desorber
      [
        { x: 500, y: 350 },
        { x: 600, y: 350 },
        { x: 700, y: 350 },
      ],
      // Path 4: Reboiler circulation
      [
        { x: 750, y: 450 },
        { x: 800, y: 450 },
        { x: 800, y: 400 },
        { x: 750, y: 400 },
      ],
    ];

    // Initialize particles
    const initialParticles: HeatFlowParticle[] = [];
    heatPaths.forEach((_, pathIndex) => {
      for (let i = 0; i < 3; i++) {
        initialParticles.push({
          x: 0,
          y: 0,
          progress: i * 0.33,
          pathIndex,
        });
      }
    });
    setParticles(initialParticles);

    const drawSchematic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set base styling
      ctx.strokeStyle = '#2a2a2a';
      ctx.lineWidth = 2;
      ctx.font = '12px monospace';
      ctx.fillStyle = '#2a2a2a';

      // Absorber (left tower)
      drawTower(ctx, 200, 200, 100, 300, 'ABSORBER');
      
      // Desorber (right tower)
      drawTower(ctx, 700, 200, 100, 300, 'DESORBER');

      // Heat Exchanger (center)
      drawHeatExchanger(ctx, 450, 250, 100, 200, 'HEAT\nEXCHANGER');

      // Reboiler
      drawReboiler(ctx, 700, 520, 100, 60, 'REBOILER');

      // Contact Cooler
      drawCooler(ctx, 100, 300, 80, 100, 'CONTACT\nCOOLER');

      // Trim Cooler
      drawCooler(ctx, 150, 150, 60, 80, 'TRIM\nCOOLER');

      // Absorber Sump
      drawSump(ctx, 200, 520, 100, 40, 'ABSORBER\nSUMP');

      // Lean Amine Pump
      drawPump(ctx, 380, 520, 40, 40, 'LEAN AMINE\nPUMP');

      // Rich MEA Pump
      drawPump(ctx, 600, 520, 40, 40, 'RICH MEA\nPUMP');

      // Draw process flow lines (black)
      ctx.strokeStyle = '#2a2a2a';
      ctx.lineWidth = 2;

      // Flue gas inlet
      drawArrow(ctx, 50, 450, 190, 450, '#2a2a2a');
      ctx.fillText('Flue gas', 60, 440);

      // Depleted flue gas outlet
      drawArrow(ctx, 250, 190, 250, 120, '#2a2a2a');
      ctx.fillText('Depleted flue gas', 180, 110);
      ctx.fillText('(To Atmosphere)', 180, 125);

      // Water wash
      drawArrow(ctx, 100, 230, 190, 230, '#2a2a2a');
      ctx.fillText('Water wash', 105, 220);

      // CO2 to compression
      drawArrow(ctx, 750, 190, 750, 120, '#2a2a2a');
      ctx.fillText('To CO₂', 760, 150);
      ctx.fillText('Compression', 760, 165);

      // Rich MEA line
      ctx.beginPath();
      ctx.moveTo(310, 350);
      ctx.lineTo(310, 520);
      ctx.lineTo(340, 520);
      ctx.stroke();

      // Lean amine line
      ctx.beginPath();
      ctx.moveTo(420, 520);
      ctx.lineTo(450, 520);
      ctx.lineTo(450, 350);
      ctx.stroke();

      // Through heat exchanger
      ctx.beginPath();
      ctx.moveTo(550, 350);
      ctx.lineTo(690, 350);
      ctx.stroke();

      // To desorber bottom
      ctx.beginPath();
      ctx.moveTo(750, 510);
      ctx.lineTo(750, 520);
      ctx.stroke();

      // From desorber bottom to reboiler
      ctx.beginPath();
      ctx.moveTo(800, 520);
      ctx.lineTo(850, 520);
      ctx.lineTo(850, 550);
      ctx.lineTo(810, 550);
      ctx.stroke();

      // From reboiler back to desorber
      ctx.beginPath();
      ctx.moveTo(700, 550);
      ctx.lineTo(650, 550);
      ctx.lineTo(650, 500);
      ctx.lineTo(700, 500);
      ctx.stroke();

      // NOW DRAW HEAT FLOW PATHS IN RED
      ctx.strokeStyle = '#dc2626';
      ctx.lineWidth = 3;

      heatPaths.forEach(path => {
        ctx.beginPath();
        path.forEach((point, i) => {
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });
        ctx.stroke();

        // Add glow effect
        ctx.strokeStyle = 'rgba(220, 38, 38, 0.3)';
        ctx.lineWidth = 8;
        ctx.stroke();
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 3;
      });

      // Draw heat labels
      ctx.fillStyle = '#dc2626';
      ctx.font = 'bold 11px monospace';
      ctx.fillText('HEAT FLOW →', 360, 335);
      ctx.fillText('HEAT', 510, 240);
      ctx.fillText('EXCHANGE', 490, 255);
      ctx.fillText('← HEAT FLOW →', 560, 335);
      ctx.fillText('REBOILER', 740, 440);
      ctx.fillText('HEAT', 760, 455);
    };

    const drawTower = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, label: string) => {
      // Main tower body
      ctx.strokeRect(x, y, w, h);
      
      // Internal trays (horizontal lines)
      for (let i = 1; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(x, y + (h / 5) * i);
        ctx.lineTo(x + w, y + (h / 5) * i);
        ctx.stroke();
      }

      // Label
      ctx.save();
      ctx.translate(x + w / 2, y + h / 2);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, 0, 0);
      ctx.restore();
    };

    const drawHeatExchanger = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, label: string) => {
      // Main body
      ctx.strokeRect(x, y, w, h);

      // Tubes (wavy lines to indicate heat transfer)
      const tubeCount = 8;
      for (let i = 1; i < tubeCount; i++) {
        const yPos = y + (h / tubeCount) * i;
        ctx.beginPath();
        ctx.moveTo(x, yPos);
        for (let j = 0; j < w; j += 10) {
          ctx.lineTo(x + j, yPos + (j % 20 < 10 ? -3 : 3));
        }
        ctx.stroke();
      }

      // Label
      const lines = label.split('\n');
      ctx.textAlign = 'center';
      lines.forEach((line, i) => {
        ctx.fillText(line, x + w / 2, y + h / 2 - 10 + i * 14);
      });
    };

    const drawReboiler = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, label: string) => {
      // Main body (rounded bottom)
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + w, y);
      ctx.lineTo(x + w, y + h - 20);
      ctx.arc(x + w / 2, y + h - 20, w / 2, 0, Math.PI);
      ctx.closePath();
      ctx.stroke();

      // Heat source indicator
      ctx.beginPath();
      ctx.moveTo(x + w / 2 - 15, y + h + 5);
      ctx.lineTo(x + w / 2, y + h + 15);
      ctx.lineTo(x + w / 2 + 15, y + h + 5);
      ctx.stroke();

      ctx.fillText(label, x + w / 2, y + h / 2);
    };

    const drawCooler = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, label: string) => {
      ctx.strokeRect(x, y, w, h);
      
      // Cooling coils
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(x + w / 2, y + h / 5 * (i + 1), w / 4, 0, Math.PI * 2);
        ctx.stroke();
      }

      const lines = label.split('\n');
      ctx.textAlign = 'center';
      lines.forEach((line, i) => {
        ctx.fillText(line, x + w / 2, y - 10 - (lines.length - 1 - i) * 14);
      });
    };

    const drawSump = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, label: string) => {
      ctx.strokeRect(x, y, w, h);
      
      // Liquid level
      ctx.beginPath();
      ctx.moveTo(x, y + h / 2);
      ctx.lineTo(x + w, y + h / 2);
      ctx.stroke();

      ctx.textAlign = 'center';
      const lines = label.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, x + w / 2, y + h + 15 + i * 14);
      });
    };

    const drawPump = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, label: string) => {
      // Pump body (circle)
      ctx.beginPath();
      ctx.arc(x + w / 2, y + h / 2, w / 2, 0, Math.PI * 2);
      ctx.stroke();

      // Impeller
      ctx.beginPath();
      ctx.moveTo(x + w / 2 - 10, y + h / 2);
      ctx.lineTo(x + w / 2 + 10, y + h / 2);
      ctx.moveTo(x + w / 2, y + h / 2 - 10);
      ctx.lineTo(x + w / 2, y + h / 2 + 10);
      ctx.stroke();

      const lines = label.split('\n');
      ctx.textAlign = 'center';
      lines.forEach((line, i) => {
        ctx.fillText(line, x + w / 2, y + h + 15 + i * 14);
      });
    };

    const drawArrow = (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      const angle = Math.atan2(y2 - y1, x2 - x1);
      const arrowLength = 10;

      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(
        x2 - arrowLength * Math.cos(angle - Math.PI / 6),
        y2 - arrowLength * Math.sin(angle - Math.PI / 6)
      );
      ctx.lineTo(
        x2 - arrowLength * Math.cos(angle + Math.PI / 6),
        y2 - arrowLength * Math.sin(angle + Math.PI / 6)
      );
      ctx.closePath();
      ctx.fill();
    };

    let animationId: number;

    const animate = () => {
      drawSchematic();

      // Update and draw particles
      setParticles(prevParticles => {
        const updated = prevParticles.map(particle => {
          const path = heatPaths[particle.pathIndex];
          let newProgress = particle.progress + 0.008;
          if (newProgress > 1) newProgress = 0;

          const segmentCount = path.length - 1;
          const segment = Math.floor(newProgress * segmentCount);
          const segmentProgress = (newProgress * segmentCount) % 1;

          const start = path[Math.min(segment, path.length - 2)];
          const end = path[Math.min(segment + 1, path.length - 1)];

          const x = start.x + (end.x - start.x) * segmentProgress;
          const y = start.y + (end.y - start.y) * segmentProgress;

          return { ...particle, x, y, progress: newProgress };
        });

        // Draw particles
        ctx.fillStyle = '#dc2626';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#dc2626';
        updated.forEach(particle => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, 4, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.shadowBlur = 0;

        return updated;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <canvas ref={canvasRef} className="border-2 border-gray-800 bg-white" />
    </div>
  );
}
