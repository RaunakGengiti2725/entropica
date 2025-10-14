import { useEffect, useRef } from 'react';

export function NeuralWave3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 600;

    // Wave grid parameters
    const cols = 40;
    const rows = 30;
    const gridSpacing = 20;
    let time = 0;

    // Neural network nodes positioned on the wave
    const neurons: Array<{
      gridX: number;
      gridY: number;
      pulse: number;
      pulseSpeed: number;
      connections: number[];
    }> = [];

    // Create neurons at specific grid positions
    for (let i = 0; i < 80; i++) {
      const neuron = {
        gridX: Math.floor(Math.random() * cols),
        gridY: Math.floor(Math.random() * rows),
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        connections: [] as number[],
      };
      neurons.push(neuron);
    }

    // Create connections between nearby neurons
    neurons.forEach((neuron, i) => {
      neurons.forEach((other, j) => {
        if (i !== j) {
          const dx = neuron.gridX - other.gridX;
          const dy = neuron.gridY - other.gridY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 8 && Math.random() > 0.7) {
            neuron.connections.push(j);
          }
        }
      });
    });

    const getWaveHeight = (x: number, y: number, t: number): number => {
      const wave1 = Math.sin(x * 0.1 + t) * 30;
      const wave2 = Math.sin(y * 0.08 + t * 0.8) * 25;
      const wave3 = Math.sin((x + y) * 0.05 + t * 1.2) * 20;
      return wave1 + wave2 + wave3;
    };

    const project3D = (x: number, y: number, z: number) => {
      const scale = 400 / (400 + z);
      return {
        x: canvas.width / 2 + (x - cols * gridSpacing / 2) * scale,
        y: canvas.height / 2 + (y - rows * gridSpacing / 2) * scale,
        scale,
      };
    };

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.03;

      // Draw wave grid
      ctx.strokeStyle = 'rgba(42, 42, 42, 0.3)';
      ctx.lineWidth = 1;

      // Draw horizontal lines
      for (let row = 0; row < rows; row++) {
        ctx.beginPath();
        for (let col = 0; col < cols; col++) {
          const x = col * gridSpacing;
          const y = row * gridSpacing;
          const z = getWaveHeight(x, y, time);
          const projected = project3D(x, y, z);

          if (col === 0) {
            ctx.moveTo(projected.x, projected.y);
          } else {
            ctx.lineTo(projected.x, projected.y);
          }
        }
        ctx.stroke();
      }

      // Draw vertical lines
      for (let col = 0; col < cols; col++) {
        ctx.beginPath();
        for (let row = 0; row < rows; row++) {
          const x = col * gridSpacing;
          const y = row * gridSpacing;
          const z = getWaveHeight(x, y, time);
          const projected = project3D(x, y, z);

          if (row === 0) {
            ctx.moveTo(projected.x, projected.y);
          } else {
            ctx.lineTo(projected.x, projected.y);
          }
        }
        ctx.stroke();
      }

      // Draw neural network connections (pulsing red lines)
      neurons.forEach((neuron, i) => {
        const x1 = neuron.gridX * gridSpacing;
        const y1 = neuron.gridY * gridSpacing;
        const z1 = getWaveHeight(x1, y1, time);
        const pos1 = project3D(x1, y1, z1);

        neuron.pulse += neuron.pulseSpeed;
        const pulseValue = (Math.sin(neuron.pulse) + 1) / 2;

        neuron.connections.forEach(targetIndex => {
          const target = neurons[targetIndex];
          const x2 = target.gridX * gridSpacing;
          const y2 = target.gridY * gridSpacing;
          const z2 = getWaveHeight(x2, y2, time);
          const pos2 = project3D(x2, y2, z2);

          // Pulsing red connection
          const opacity = 0.3 + pulseValue * 0.5;
          const lineWidth = 1 + pulseValue * 2;

          ctx.strokeStyle = `rgba(220, 38, 38, ${opacity})`;
          ctx.lineWidth = lineWidth;

          ctx.beginPath();
          ctx.moveTo(pos1.x, pos1.y);
          ctx.lineTo(pos2.x, pos2.y);
          ctx.stroke();

          // Glow effect
          ctx.strokeStyle = `rgba(220, 38, 38, ${opacity * 0.3})`;
          ctx.lineWidth = lineWidth * 3;
          ctx.stroke();
        });
      });

      // Draw neurons
      neurons.forEach(neuron => {
        const x = neuron.gridX * gridSpacing;
        const y = neuron.gridY * gridSpacing;
        const z = getWaveHeight(x, y, time);
        const pos = project3D(x, y, z);

        const pulseValue = (Math.sin(neuron.pulse) + 1) / 2;
        const size = 3 + pulseValue * 3;
        const opacity = 0.6 + pulseValue * 0.4;

        // Outer glow
        ctx.fillStyle = `rgba(220, 38, 38, ${opacity * 0.3})`;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.fillStyle = `rgba(220, 38, 38, ${opacity})`;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Bright center
        ctx.fillStyle = `rgba(255, 100, 100, ${opacity})`;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
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
