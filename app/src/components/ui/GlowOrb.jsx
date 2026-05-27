import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function GlowOrb({ color = 'lava', size = 300, x = '50%', y = '50%', delay = 0 }) {
  const ref = useRef(null)
  const colors = {
    lava: 'rgba(255, 106, 42, 0.14)',
    red: 'rgba(255, 59, 59, 0.11)',
    amber: 'rgba(255, 184, 0, 0.11)',
  }

  useEffect(() => {
    if (!ref.current) return
    gsap.to(ref.current, {
      scale: 1.25,
      opacity: 0.7,
      duration: 3 + Math.random() * 2,
      delay,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [delay])

  return (
    <div
      ref={ref}
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, ${colors[color] || colors.lava} 0%, transparent 70%)`,
        transform: 'translate(-50%, -50%)',
        opacity: 0.5,
      }}
    />
  )
}
