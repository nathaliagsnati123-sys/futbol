import React from 'react';
import { PitchDiagramConfig } from '../../types';

interface Props {
  diagram: PitchDiagramConfig;
  className?: string;
}

export const PitchThumbnail: React.FC<Props> = ({ diagram, className = '' }) => {
  if (!diagram || !diagram.elements) return null;

  const { type, elements } = diagram;

  return (
    <div className={`relative overflow-hidden rounded-lg border border-emerald-800/40 bg-[#06180d] select-none ${className}`}>
      <svg viewBox="0 0 400 240" className="w-full h-24 object-cover block" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="thumbGrass" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#082214" />
            <stop offset="25%" stopColor="#082214" />
            <stop offset="25%" stopColor="#0a2a19" />
            <stop offset="50%" stopColor="#0a2a19" />
            <stop offset="50%" stopColor="#082214" />
            <stop offset="75%" stopColor="#082214" />
            <stop offset="75%" stopColor="#0a2a19" />
            <stop offset="100%" stopColor="#0a2a19" />
          </linearGradient>
        </defs>

        {/* Grass */}
        <rect width="400" height="240" fill="url(#thumbGrass)" />

        {/* Pitch boundary lines */}
        {type === 'full_pitch' ? (
          <g stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" fill="none">
            <rect x="20" y="15" width="360" height="210" />
            <line x1="200" y1="15" x2="200" y2="225" />
            <circle cx="200" cy="120" r="32" />
            <rect x="20" y="60" width="45" height="120" />
            <rect x="335" y="60" width="45" height="120" />
          </g>
        ) : type === 'rondos_grid' ? (
          <g stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" fill="none">
            <rect x="20" y="15" width="360" height="210" strokeDasharray="3,3" />
            <rect x="90" y="30" width="220" height="180" stroke="#4ade80" strokeWidth="1.5" fill="rgba(34,197,94,0.06)" />
          </g>
        ) : (
          <g stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" fill="none">
            <rect x="20" y="15" width="360" height="210" />
            <rect x="100" y="15" width="200" height="95" />
            <circle cx="200" cy="75" r="2" fill="rgba(255,255,255,0.5)" />
            <line x1="20" y1="225" x2="380" y2="225" stroke="#ffffff" strokeWidth="1.5" />
            <rect x="170" y="7" width="60" height="8" stroke="#ffffff" strokeWidth="2" fill="rgba(255,255,255,0.2)" />
          </g>
        )}

        {/* Movement and Pass Lines */}
        {elements
          .filter((el) => el.type === 'arrow' && el.targetX !== undefined && el.targetY !== undefined)
          .map((el) => {
            const x1 = (el.x / 100) * 400;
            const y1 = (el.y / 100) * 240;
            const x2 = ((el.targetX ?? el.x) / 100) * 400;
            const y2 = ((el.targetY ?? el.y) / 100) * 240;

            const stroke = el.arrowType === 'pass' ? '#facc15' : el.arrowType === 'shot' ? '#f87171' : '#4ade80';
            const dash = el.arrowType === 'pass' ? '3,3' : undefined;

            return (
              <line
                key={el.id}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={stroke}
                strokeWidth={el.arrowType === 'shot' ? 2.5 : 1.8}
                strokeDasharray={dash}
              />
            );
          })}

        {/* Cones */}
        {elements
          .filter((el) => el.type === 'cone')
          .map((el) => {
            const cx = (el.x / 100) * 400;
            const cy = (el.y / 100) * 240;
            return (
              <polygon
                key={el.id}
                points={`${cx},${cy - 5} ${cx + 4},${cy + 4} ${cx - 4},${cy + 4}`}
                fill="#f97316"
              />
            );
          })}

        {/* Balls */}
        {elements
          .filter((el) => el.type === 'ball')
          .map((el) => {
            const bx = (el.x / 100) * 400;
            const by = (el.y / 100) * 240;
            return <circle key={el.id} cx={bx} cy={by} r="3.5" fill="#ffffff" stroke="#000" strokeWidth="0.8" />;
          })}

        {/* Players */}
        {elements
          .filter((el) => el.type === 'player')
          .map((el) => {
            const px = (el.x / 100) * 400;
            const py = (el.y / 100) * 240;

            const color =
              el.team === 'home'
                ? '#10b981'
                : el.team === 'away'
                ? '#ef4444'
                : el.team === 'gk'
                ? '#06b6d4'
                : '#eab308';

            return (
              <g key={el.id} transform={`translate(${px}, ${py})`}>
                <circle cx="0" cy="0" r="6" fill={color} stroke="#ffffff" strokeWidth="1" />
                {el.label && (
                  <text
                    x="0"
                    y="2.5"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="6"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    {el.label.substring(0, 3)}
                  </text>
                )}
              </g>
            );
          })}
      </svg>
    </div>
  );
};
