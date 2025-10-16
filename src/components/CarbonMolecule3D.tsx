import React, { useEffect, useRef } from 'react';

export function CarbonMolecule3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let rotation = 0;
    let animationId: number;

    const animate = () => {
      rotation += 0.005;
      if (containerRef.current) {
        containerRef.current.style.transform = `rotateX(${Math.sin(rotation) * 20}deg) rotateY(${rotation * 50}deg)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative w-full h-96 flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div
        ref={containerRef}
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          width: '200px',
          height: '200px'
        }}
      >
        {/* Carbon atoms */}
        {[
          { x: 0, y: 0, z: 0 },
          { x: 80, y: 80, z: 80 },
          { x: -80, y: 80, z: -80 },
          { x: 80, y: -80, z: -80 },
          { x: -80, y: -80, z: 80 },
          { x: 0, y: 120, z: 0 },
          { x: 120, y: 0, z: 0 },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 rounded-full border-2 border-red-600 bg-red-600/20"
            style={{
              transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)`,
              left: '50%',
              top: '50%',
              marginLeft: '-12px',
              marginTop: '-12px',
            }}
          />
        ))}

        {/* Bonds */}
        {[
          { from: { x: 0, y: 0, z: 0 }, to: { x: 80, y: 80, z: 80 } },
          { from: { x: 0, y: 0, z: 0 }, to: { x: -80, y: 80, z: -80 } },
          { from: { x: 0, y: 0, z: 0 }, to: { x: 80, y: -80, z: -80 } },
          { from: { x: 0, y: 0, z: 0 }, to: { x: -80, y: -80, z: 80 } },
          { from: { x: 0, y: 0, z: 0 }, to: { x: 0, y: 120, z: 0 } },
          { from: { x: 0, y: 0, z: 0 }, to: { x: 120, y: 0, z: 0 } },
        ].map((bond, i) => {
          const dx = bond.to.x - bond.from.x;
          const dy = bond.to.y - bond.from.y;
          const dz = bond.to.z - bond.from.z;
          const length = Math.sqrt(dx * dx + dy * dy + dz * dz);

          return (
            <div
              key={i}
              className="absolute bg-gray-400"
              style={{
                width: '1px',
                height: `${length}px`,
                transform: `translate3d(${bond.from.x}px, ${bond.from.y}px, ${bond.from.z}px)`,
                transformOrigin: 'top',
                left: '50%',
                top: '50%',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
