import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ScaleIn, GlitchReveal, BlurReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { Meteors } from '../magicui/meteors'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { BrainCircuit } from 'lucide-react'

export default function Slide04() {
  const orbRef = useRef(null)

  useEffect(() => {
    if (orbRef.current) {
      gsap.to(orbRef.current, {
        boxShadow: '0 0 50px rgba(255, 59, 59, 0.15)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="red" size={600} x="50%" y="50%" />
      <Meteors number={15} minDuration={3} maxDuration={8} className="opacity-40" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-10">
        <ScaleIn delay={0.2}>
          <div
            ref={orbRef}
            className="w-28 h-28 rounded-full bg-primary/[0.08] border border-primary/20 flex items-center justify-center"
          >
            <BrainCircuit className="w-12 h-12 text-primary" strokeWidth={1.5} />
          </div>
        </ScaleIn>

        <FadeUp delay={0.4}>
          <span className="text-primary text-base font-medium uppercase tracking-[0.25em] mt-4">
            Concepto clave
          </span>
        </FadeUp>

        <GlitchReveal delay={0.6}>
          <h2 className="text-6xl md:text-8xl font-black font-display text-depth tracking-tight mt-4">
            ALUCINACIÓN
          </h2>
        </GlitchReveal>

        <FadeUp delay={0.9}>
          <p className="text-xl md:text-2xl text-depth-subtle max-w-2xl leading-relaxed mt-4">
            Cuando la IA inventa información y te la dice con tanta seguridad que parece verdad.
          </p>
        </FadeUp>

        <BlurReveal delay={1.2}>
          <p className="text-[#ccc] text-xl italic leading-relaxed max-w-xl mt-6">
            La IA no sabe que no sabe. Por eso miente con buena gramática.
          </p>
        </BlurReveal>
      </div>
    </SlideWrapper>
  )
}
