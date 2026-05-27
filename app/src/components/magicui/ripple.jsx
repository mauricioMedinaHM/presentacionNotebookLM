import React from 'react'

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  color = 'rgba(255, 106, 42, 0.15)',
  className = '',
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 select-none ${className}`}
      style={{
        maskImage: 'linear-gradient(to bottom, white, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)',
      }}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70
        const opacity = mainCircleOpacity - i * 0.03
        return (
          <div
            key={i}
            className="animate-ripple absolute rounded-full border"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay: `${i * 0.06}s`,
              borderColor: color,
              borderWidth: '1px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(1)',
            }}
          />
        )
      })}
    </div>
  )
})
