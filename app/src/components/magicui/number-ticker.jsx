import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'motion/react'

export function NumberTicker({
  value,
  startValue = 0,
  direction = 'up',
  delay = 0,
  decimalPlaces = 0,
  className = '',
  suffix = '',
  prefix = '',
}) {
  const ref = useRef(null)
  const motionValue = useMotionValue(direction === 'down' ? value : startValue)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: '0px' })

  useEffect(() => {
    let timer = null
    if (isInView) {
      timer = setTimeout(() => {
        motionValue.set(direction === 'down' ? startValue : value)
      }, delay * 1000)
    }
    return () => { if (timer !== null) clearTimeout(timer) }
  }, [motionValue, isInView, delay, value, direction, startValue])

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          const formatted = Intl.NumberFormat('es-AR', {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)))
          ref.current.textContent = prefix + formatted + suffix
        }
      }),
    [springValue, decimalPlaces, suffix, prefix]
  )

  return (
    <span
      ref={ref}
      className={`inline-block tracking-wider tabular-nums ${className}`}
    >
      {prefix}{startValue}{suffix}
    </span>
  )
}
