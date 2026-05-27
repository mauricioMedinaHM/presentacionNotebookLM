import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.9, delay, ease: 'power3.out' }
    )
  }, [delay])

  return <div ref={ref} className={className} style={{ opacity: 0 }}>{children}</div>
}

export function ScaleIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.8, delay, ease: 'back.out(1.4)' }
    )
  }, [delay])

  return <div ref={ref} className={className} style={{ opacity: 0 }}>{children}</div>
}

export function SlideIn({ children, delay = 0, direction = 'left', className = '' }) {
  const ref = useRef(null)
  const x = direction === 'left' ? -80 : 80

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current,
      { opacity: 0, x },
      { opacity: 1, x: 0, duration: 0.9, delay, ease: 'power3.out' }
    )
  }, [delay, x])

  return <div ref={ref} className={className} style={{ opacity: 0 }}>{children}</div>
}

export function GlitchReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const tl = gsap.timeline({ delay })
    tl.fromTo(ref.current,
      { opacity: 0, skewX: -10, x: -30 },
      { opacity: 1, skewX: 0, x: 0, duration: 0.6, ease: 'power4.out' }
    )
    tl.to(ref.current, { x: 3, duration: 0.05, ease: 'none' })
    tl.to(ref.current, { x: -2, duration: 0.05, ease: 'none' })
    tl.to(ref.current, { x: 0, duration: 0.05, ease: 'none' })
  }, [delay])

  return <div ref={ref} className={className} style={{ opacity: 0 }}>{children}</div>
}

export function ClipReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current,
      { clipPath: 'inset(100% 0% 0% 0%)', y: 30 },
      { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1.1, delay, ease: 'power4.out' }
    )
  }, [delay])

  return <div ref={ref} className={className} style={{ clipPath: 'inset(100% 0% 0% 0%)' }}>{children}</div>
}

export function BlurReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current,
      { opacity: 0, y: 50, filter: 'blur(12px)', scale: 0.96 },
      { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: 1.2, delay, ease: 'power3.out' }
    )
  }, [delay])

  return <div ref={ref} className={className} style={{ opacity: 0 }}>{children}</div>
}

export function WipeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1, delay, ease: 'power3.inOut' }
    )
  }, [delay])

  return <div ref={ref} className={className} style={{ clipPath: 'inset(0 100% 0 0)' }}>{children}</div>
}

export function StaggerReveal({ children, delay = 0, stagger = 0.12, className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const items = containerRef.current.children
    gsap.fromTo(items,
      { opacity: 0, y: 30, filter: 'blur(4px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, stagger, delay, ease: 'power3.out' }
    )
  }, [delay, stagger])

  return <div ref={containerRef} className={className}>{children}</div>
}

export function CountUp({ target, delay = 0, duration = 2, suffix = '', prefix = '', className = '' }) {
  const ref = useRef(null)
  const numRef = useRef({ val: 0 })

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, delay, ease: 'power2.out' }
    )
    gsap.to(numRef.current, {
      val: target,
      duration,
      delay,
      ease: 'power2.out',
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = prefix + Math.round(numRef.current.val).toLocaleString('es-AR') + suffix
        }
      },
    })
  }, [target, delay, duration, suffix, prefix])

  return <span ref={ref} className={className} style={{ opacity: 0 }}>{prefix}0{suffix}</span>
}
