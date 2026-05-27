import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ScaleIn, CountUp, BlurReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { TrendingDown } from 'lucide-react'

export default function Slide09() {
  const barRef = useRef(null)
  const noteRef = useRef(null)

  useEffect(() => {
    if (barRef.current) {
      gsap.fromTo(barRef.current,
        { width: '100%' },
        { width: '33%', duration: 2.5, delay: 1, ease: 'power3.out' }
      )
    }
    if (noteRef.current) {
      gsap.to(noteRef.current, {
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="lava" size={500} x="50%" y="40%" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-14">
        <FadeUp delay={0.2}>
          <p className="text-lg text-depth-subtle">
            Las alucinaciones no se eliminan por completo
          </p>
        </FadeUp>

        <ScaleIn delay={0.5}>
          <div className="flex items-center gap-6 mt-6">
            <TrendingDown className="w-10 h-10 text-lava/25" strokeWidth={1.5} />
            <div>
              <CountUp target={67} delay={0.6} duration={2} suffix="%" className="text-7xl md:text-9xl font-black text-depth-accent" />
              <p className="text-xl text-depth mt-4 font-semibold">
                de reducción
              </p>
            </div>
          </div>
        </ScaleIn>

        <FadeUp delay={0.9}>
          <div className="w-full max-w-md pt-8">
            <div className="h-3 bg-surface rounded-full overflow-hidden">
              <div
                ref={barRef}
                className="h-full rounded-full"
                style={{ width: '100%', background: 'linear-gradient(to right, #E61C1C, #FF5E00, #FF9D00)' }}
              />
            </div>
            <div className="flex justify-between mt-5 text-xs text-[#555] tracking-wide">
              <span>Sin NotebookLM</span>
              <span>Con NotebookLM</span>
            </div>
          </div>
        </FadeUp>

        <BlurReveal delay={1.3}>
          <p ref={noteRef} className="text-[#555] text-lg max-w-xl leading-relaxed mt-6" style={{ opacity: 0.4 }}>
            Pueden pensar que no se le tiene que dar importancia, pero el día de mañana ese porcentaje de error puede costar muy caro...
          </p>
        </BlurReveal>
      </div>
    </SlideWrapper>
  )
}
