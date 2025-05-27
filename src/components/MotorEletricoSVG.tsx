'use client';

import { useEffect, useRef } from 'react';

export default function MotorEletricoSVG() {
  const eixoRef = useRef<SVGCircleElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let frame: number;
    let angle = 0;
    // Ajustar o centro de rotação para o centro visual do eixo
    const centerX = 200; // Centro visual X no viewBox 400x300
    const centerY = 130; // Centro visual Y no viewBox 400x300

    function animate() {
      angle += 1; // Velocidade de rotação ajustada
      if (eixoRef.current) {
        eixoRef.current.setAttribute('transform', `rotate(${angle} ${centerX} ${centerY})`);
      }
      frame = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Carcaça do motor */}
      <rect x="60" y="80" width="280" height="100" rx="30" fill="#1e293b" stroke="#60a5fa" strokeWidth="6" />
      {/* Linhas técnicas */}
      <rect x="80" y="100" width="240" height="60" rx="20" fill="#0ea5e9" opacity="0.08" />
      <rect x="110" y="120" width="180" height="20" rx="10" fill="#38bdf8" opacity="0.12" />
      {/* Efeito digital */}
      <g opacity="0.5">
        <path d="M340 80 L370 60" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 4" />
        <path d="M340 180 L370 200" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 4" />
        <path d="M60 80 L30 60" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 4" />
        <path d="M60 180 L30 200" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 4" />
      </g>
      {/* Eixo animado */}
      <g>
        <rect x="180" y="60" width="40" height="180" rx="20" fill="#fbbf24" stroke="#f59e42" strokeWidth="4" />
        <circle ref={eixoRef} cx="200" cy="130" r="36" fill="#fff" stroke="#60a5fa" strokeWidth="8" />
        <circle cx="200" cy="130" r="18" fill="#0ea5e9" stroke="#38bdf8" strokeWidth="4" />
        {/* Linhas de energia */}
        <path d="M200 130 Q220 100 240 130" stroke="#38bdf8" strokeWidth="3" fill="none" />
        <path d="M200 130 Q180 160 160 130" stroke="#38bdf8" strokeWidth="3" fill="none" />
      </g>
      {/* Caixa de ligação */}
      <rect x="320" y="60" width="40" height="40" rx="8" fill="#1e293b" stroke="#60a5fa" strokeWidth="4" />
      <rect x="325" y="65" width="30" height="30" rx="6" fill="#38bdf8" opacity="0.15" />
      {/* Parafusos */}
      <circle cx="335" cy="75" r="3" fill="#fff" />
      <circle cx="345" cy="75" r="3" fill="#fff" />
      {/* Detalhes extras */}
      <rect x="70" y="110" width="20" height="40" rx="6" fill="#38bdf8" opacity="0.18" />
      <rect x="310" y="110" width="20" height="40" rx="6" fill="#38bdf8" opacity="0.18" />
      {/* Brilho digital */}
      <ellipse cx="200" cy="180" rx="60" ry="10" fill="#38bdf8" opacity="0.08" />
    </svg>
  );
} 