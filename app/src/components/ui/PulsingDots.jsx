import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function PulsingDots({ count = 3, className = '' }) {
  const dotsRef = useRef([])

  useEffect(() => {
    dotsRef.current.forEach((dot, i) => {
      if (!dot) return
      gsap.to(dot, {
        scale: 1.5,
        opacity: 1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        delay: i * 0.3,
        ease: 'sine.inOut',
      })
    })
  }, [])

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          ref={el => dotsRef.current[i] = el}
          className="w-2 h-2 rounded-full bg-lava"
          style={{ opacity: 0.3 }}
        />
      ))}
    </div>
  )
}
