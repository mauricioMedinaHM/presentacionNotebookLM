import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'motion/react'
import ParticleField from './components/ui/ParticleField'
import ProgressBar from './components/ui/ProgressBar'
import Slide00 from './components/slides/Slide00'
import Slide01 from './components/slides/Slide01'
import Slide02 from './components/slides/Slide02'
import Slide03 from './components/slides/Slide03'
import Slide04 from './components/slides/Slide04'
import Slide05 from './components/slides/Slide05'
import Slide06 from './components/slides/Slide06'
import Slide07 from './components/slides/Slide07'
import Slide08 from './components/slides/Slide08'
import Slide09 from './components/slides/Slide09'
import Slide10 from './components/slides/Slide10'
import Slide11 from './components/slides/Slide11'
import Slide12 from './components/slides/Slide12'
import Slide13 from './components/slides/Slide13'
import Slide14 from './components/slides/Slide14'
import Slide15 from './components/slides/Slide15'
import Slide16 from './components/slides/Slide16'
import Slide17 from './components/slides/Slide17'
import Slide18 from './components/slides/Slide18'

const slides = [
  Slide00, Slide01, Slide02, Slide03, Slide04,
  Slide05, Slide06, Slide07, Slide08, Slide09,
  Slide10, Slide11, Slide12, Slide13, Slide14,
  Slide15, Slide16, Slide17, Slide18,
]

function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback((index) => {
    if (index < 0 || index >= slides.length) return
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev])

  useEffect(() => {
    let touchStartX = 0
    let touchStartY = 0
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }
    const handleTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX
      const dy = e.changedTouches[0].clientY - touchStartY
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) next()
        else prev()
      }
    }
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [next, prev])

  const CurrentSlide = slides[current]

  return (
    <div className="w-screen h-screen bg-base bg-mesh overflow-hidden relative noise-overlay">
      <ParticleField />

      <div className="fixed top-6 right-8 z-50 flex items-center gap-3">
        <span className="text-[#333] text-sm font-mono tracking-wider">
          {String(current + 1).padStart(2, '0')} / {slides.length}
        </span>
      </div>

      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? 'h-6 bg-lava'
                : 'h-1.5 bg-[#222] hover:bg-[#444]'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <CurrentSlide key={current} />
      </AnimatePresence>

      <ProgressBar current={current} total={slides.length} />
    </div>
  )
}

export default App
