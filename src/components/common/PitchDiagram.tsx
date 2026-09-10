import React from 'react';
import { PitchDiagramConfig } from '../../types';

interface Props {
  diagram?: PitchDiagramConfig;
  className?: string;
  showLegend?: boolean;
}

export const PitchDiagram: React.FC<Props> = ({
  diagram,
  className = '',
  showLegend = true,
}) => {
  if (!diagram || !diagram.elements) {
    return null;
  }

  const { type, elements } = diagram;

  return (
    <div className={`relative overflow-hidden rounded-xl border border-emerald-500/30 bg-[#072113] shadow-inner select-none ${className}`}>
      {/* SVG Tactical Pitch */}
      <svg
        viewBox="0 0 400 280"
        className="w-full h-auto max-h-[360px] block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Pitch grass pattern stripes */}
          <linearGradient id="grassStripes" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a2a19" />
            <stop offset="10%" stopColor="#0a2a19" />
            <stop offset="10%" stopColor="#082415" />
            <stop offset="20%" stopColor="#082415" />
            <stop offset="20%" stopColor="#0a2a19" />
            <stop offset="30%" stopColor="#0a2a19" />
            <stop offset="30%" stopColor="#082415" />
            <stop offset="40%" stopColor="#082415" />
            <stop offset="40%" stopColor="#0a2a19" />
            <stop offset="50%" stopColor="#0a2a19" />
            <stop offset="50%" stopColor="#082415" />
            <stop offset="60%" stopColor="#082415" />
            <stop offset="60%" stopColor="#0a2a19" />
            <stop offset="70%" stopColor="#0a2a19" />
            <stop offset="70%" stopColor="#082415" />
            <stop offset="80%" stopColor="#082415" />
            <stop offset="80%" stopColor="#0a2a19" />
            <stop offset="90%" stopColor="#0a2a19" />
            <stop offset="90%" stopColor="#082415" />
            <stop offset="100%" stopColor="#082415" />
          </linearGradient>

          {/* Arrow markers */}
          <marker
            id="arrow-pass"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#facc15" />
          </marker>

          <marker
            id="arrow-run"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#4ade80" />
          </marker>

          <marker
            id="arrow-shot"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#f87171" />
          </marker>
        </defs>

        {/* Pitch background */}
        <rect width="400" height="280" fill="url(#grassStripes)" />

        {/* Pitch lines */}
        {type === 'full_pitch' ? (
          <g stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none">
            {/* Outer boundary */}
            <rect x="20" y="15" width="360" height="250" />
            {/* Half line */}
            <line x1="200" y1="15" x2="200" y2="265" />
            <circle cx="200" cy="140" r="36" />
            <circle cx="200" cy="140" r="2" fill="rgba(255,255,255,0.6)" />

            {/* Left box */}
            <rect x="20" y="65" width="55" height="150" />
            <rect x="20" y="95" width="22" height="90" />
            <path d="M 75 115 A 25 25 0 0 1 75 165" />
            <circle cx="55" cy="140" r="2" fill="rgba(255,255,255,0.6)" />

            {/* Right box */}
            <rect x="325" y="65" width="55" height="150" />
            <rect x="358" y="95" width="22" height="90" />
            <path d="M 325 115 A 25 25 0 0 0 325 165" />
            <circle cx="345" cy="140" r="2" fill="rgba(255,255,255,0.6)" />

            {/* Goal frames */}
            <rect x="12" y="110" width="8" height="60" stroke="#ffffff" strokeWidth="2" fill="rgba(255,255,255,0.15)" />
            <rect x="380" y="110" width="8" height="60" stroke="#ffffff" strokeWidth="2" fill="rgba(255,255,255,0.15)" />
          </g>
        ) : type === 'rondos_grid' ? (
          <g stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none">
            {/* Pitch background frame */}
            <rect x="15" y="15" width="370" height="250" strokeDasharray="4,4" />
            {/* Rondo square */}
            <rect x="80" y="40" width="240" height="200" stroke="#4ade80" strokeWidth="2" fill="rgba(34,197,94,0.06)" />
            <line x1="200" y1="40" x2="200" y2="240" stroke="rgba(74,222,128,0.3)" strokeDasharray="3,3" />
            <line x1="80" y1="140" x2="320" y2="140" stroke="rgba(74,222,128,0.3)" strokeDasharray="3,3" />
          </g>
        ) : type === 'lane_grid' ? (
          <g stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none">
            <rect x="25" y="20" width="350" height="240" stroke="#ffffff" />
            {/* 3 lanes */}
            <line x1="140" y1="20" x2="140" y2="260" stroke="#facc15" strokeDasharray="5,5" />
            <line x1="260" y1="20" x2="260" y2="260" stroke="#facc15" strokeDasharray="5,5" />
            {/* Mini goals */}
            <rect x="70" y="12" width="25" height="8" stroke="#ffffff" strokeWidth="2" fill="white" />
            <rect x="305" y="12" width="25" height="8" stroke="#ffffff" strokeWidth="2" fill="white" />
            <rect x="187" y="260" width="25" height="8" stroke="#ffffff" strokeWidth="2" fill="white" />
          </g>
        ) : (
          /* half_pitch or penalty_box default */
          <g stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none">
            {/* Half pitch boundary */}
            <rect x="20" y="20" width="360" height="240" />
            {/* Penalty box */}
            <rect x="90" y="20" width="220" height="110" />
            {/* 6-yard box */}
            <rect x="145" y="20" width="110" height="45" />
            {/* Penalty spot and arc */}
            <circle cx="200" cy="85" r="2.5" fill="rgba(255,255,255,0.7)" />
            <path d="M 160 130 A 45 45 0 0 0 240 130" />
            {/* Center line */}
            <line x1="20" y1="260" x2="380" y2="260" stroke="#ffffff" strokeWidth="2" />
            <path d="M 155 260 A 45 45 0 0 1 245 260" />
            {/* Goal */}
            <rect x="165" y="8" width="70" height="12" stroke="#ffffff" strokeWidth="2.5" fill="rgba(255,255,255,0.2)" />
          </g>
        )}

        {/* Tactical Arrows Layer (drawn behind players) */}
        {elements
          .filter((el) => el.type === 'arrow' && el.targetX !== undefined && el.targetY !== undefined)
          .map((el) => {
            const startX = (el.x / 100) * 400;
            const startY = (el.y / 100) * 280;
            const endX = ((el.targetX ?? el.x) / 100) * 400;
            const endY = ((el.targetY ?? el.y) / 100) * 280;

            if (el.arrowType === 'pass') {
              return (
                <line
                  key={el.id}
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke="#facc15"
                  strokeWidth="2.5"
                  strokeDasharray="5,4"
                  markerEnd="url(#arrow-pass)"
                />
              );
            } else if (el.arrowType === 'run') {
              return (
                <line
                  key={el.id}
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke="#4ade80"
                  strokeWidth="2"
                  strokeDasharray="2,3"
                  markerEnd="url(#arrow-run)"
                />
              );
            } else {
              // shot
              return (
                <line
                  key={el.id}
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke="#f87171"
                  strokeWidth="3.5"
                  markerEnd="url(#arrow-shot)"
                />
              );
            }
          })}

        {/* Cones Layer */}
        {elements
          .filter((el) => el.type === 'cone')
          .map((el) => {
            const cx = (el.x / 100) * 400;
            const cy = (el.y / 100) * 280;
            return (
              <g key={el.id} transform={`translate(${cx - 7}, ${cy - 7})`}>
                <polygon
                  points="7,1 13,12 1,12"
                  fill="#f97316"
                  stroke="#ea580c"
                  strokeWidth="1"
                />
                <circle cx="7" cy="12" r="3" fill="#fdba74" />
              </g>
            );
          })}

        {/* Balls Layer */}
        {elements
          .filter((el) => el.type === 'ball')
          .map((el) => {
            const bx = (el.x / 100) * 400;
            const by = (el.y / 100) * 280;
            return (
              <g key={el.id} transform={`translate(${bx}, ${by})`}>
                <circle cx="0" cy="0" r="5" fill="#ffffff" stroke="#18181b" strokeWidth="1.2" />
                <circle cx="0" cy="0" r="2" fill="#18181b" />
              </g>
            );
          })}

        {/* Players Layer */}
        {elements
          .filter((el) => el.type === 'player')
          .map((el) => {
            const px = (el.x / 100) * 400;
            const py = (el.y / 100) * 280;

            const isHome = el.team === 'home';
            const isAway = el.team === 'away';
            const isGk = el.team === 'gk';

            const fillColor = isHome ? '#10b981' : isAway ? '#ef4444' : isGk ? '#06b6d4' : '#eab308';
            const strokeColor = isHome ? '#065f46' : isAway ? '#991b1b' : isGk ? '#0e7490' : '#854d0e';
            const textColor = '#ffffff';

            return (
              <g key={el.id} transform={`translate(${px}, ${py})`}>
                {/* Outer shadow / highlight */}
                <circle cx="0" cy="0" r="9" fill={fillColor} stroke={strokeColor} strokeWidth="1.8" />
                {el.label && (
                  <text
                    x="0"
                    y="3.5"
                    textAnchor="middle"
                    fill={textColor}
                    fontSize="8.5"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    {el.label}
                  </text>
                )}
              </g>
            );
          })}
      </svg>

      {/* Legend bar */}
      {showLegend && (
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-[#06180e] border-t border-emerald-900/40 text-[10px] text-gray-300">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-emerald-700 inline-block" />
              <span>Ataque / Posesión</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 border border-red-700 inline-block" />
              <span>Defensa / Oposición</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 border border-cyan-700 inline-block" />
              <span>Portero</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-white border border-black inline-block" />
              <span>Balón</span>
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-3 h-0.5 bg-yellow-400 border-b border-dashed inline-block" />
              <span>Pase</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-0.5 bg-green-400 border-b border-dotted inline-block" />
              <span>Desplazamiento</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-0.5 bg-red-400 inline-block" />
              <span>Tiro</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
