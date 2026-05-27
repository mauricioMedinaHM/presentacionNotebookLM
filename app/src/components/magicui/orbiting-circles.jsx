import React from 'react'

export function OrbitingCircles({
  children,
  className = '',
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
}) {
  const calculatedDuration = duration / speed

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-white/[0.06]"
            strokeWidth="1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        return (
          <div
            style={{
              '--duration': calculatedDuration,
              '--radius': radius,
              '--angle': angle,
              '--icon-size': `${iconSize}px`,
            }}
            className={`animate-orbit absolute flex items-center justify-center rounded-full ${reverse ? '[animation-direction:reverse]' : ''} ${className}`}
            // The size is set inline since Tailwind v4 might not support --icon-size directly
            // Actually we set it via the animation
          >
            {child}
          </div>
        )
      })}
    </>
  )
}
