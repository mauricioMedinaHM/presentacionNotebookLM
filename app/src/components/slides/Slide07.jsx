import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, GlitchReveal, BlurReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Database } from 'lucide-react'

export default function Slide07() {
  const arrowRef = useRef(null)

  useEffect(() => {
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        scale: 1.3,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="amber" size={600} x="50%" y="50%" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-10">
        <FadeUp delay={0.2}>
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-amber-accent" strokeWidth={1.5} />
            <span className="text-amber-accent text-base font-medium uppercase tracking-[0.25em]">
              Concepto clave
            </span>
          </div>
        </FadeUp>

        <GlitchReveal delay={0.4}>
          <h2 className="text-5xl md:text-7xl font-black font-display text-depth tracking-tight mt-6">
            CONTEXTO
          </h2>
        </GlitchReveal>

        <FadeUp delay={0.7}>
          <p className="text-2xl md:text-3xl text-depth-subtle max-w-2xl leading-relaxed mt-6">
            Todo lo que la IA tiene a mano para responderte en ese momento.
          </p>
        </FadeUp>

        <BlurReveal delay={1}>
          <div className="flex flex-col md:flex-row items-center gap-12 pt-10">
            <div className="text-center">
              <p className="text-primary font-semibold text-xl">Sin contexto</p>
              <p className="text-[#ccc] mt-3 text-lg">la IA adivina</p>
            </div>

            <div ref={arrowRef}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div className="text-center">
              <p className="text-amber-accent font-semibold text-xl">Con contexto</p>
              <p className="text-[#ccc] mt-3 text-lg">la IA razona</p>
            </div>
          </div>
        </BlurReveal>
      </div>
    </SlideWrapper>
  )
}
