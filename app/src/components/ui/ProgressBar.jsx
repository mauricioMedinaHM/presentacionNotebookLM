import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ProgressBar({ current, total }) {
  const barRef = useRef(null)

  useEffect(() => {
    if (!barRef.current) return
    gsap.to(barRef.current, {
      width: `${((current + 1) / total) * 100}%`,
      duration: 0.5,
      ease: 'power2.out',
    })
  }, [current, total])

  return (
    <div className="fixed bottom-0 left-0 w-full h-[3px] bg-surface-alt z-50">
      <div
        ref={barRef}
        className="h-full"
        style={{
          width: 0,
          background: 'linear-gradient(to right, #FF3B3B, #FF6A2A, #FFB800)',
        }}
      />
    </div>
  )
}
