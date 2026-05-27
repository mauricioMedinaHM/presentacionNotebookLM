import { motion } from 'motion/react'

export function BorderBeam({
  className = '',
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = '#FF6A2A',
  colorTo = '#FFB800',
  reverse = false,
  initialOffset = 0,
  borderWidth = 1.5,
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden"
      style={{
        border: `${borderWidth}px solid transparent`,
        maskImage: 'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
        maskClip: 'padding-box, border-box',
        WebkitMaskClip: 'padding-box, border-box',
      }}
    >
      <motion.div
        className={`absolute aspect-square ${className}`}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
        }}
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
          delay: -delay,
        }}
      />
    </div>
  )
}
