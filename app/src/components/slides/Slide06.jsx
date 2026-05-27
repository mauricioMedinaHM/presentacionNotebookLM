import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ScaleIn, CountUp, BlurReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { AlertTriangle } from 'lucide-react'

export default function Slide06() {
  return (
    <SlideWrapper>
      <GlowOrb color="red" size={500} x="50%" y="40%" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-10">
        <FadeUp delay={0.2}>
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-4 h-4 text-primary/40" strokeWidth={1.5} />
            <span className="text-primary/40 text-xs font-medium uppercase tracking-[0.25em]">
              El problema es real
            </span>
          </div>
        </FadeUp>

        <ScaleIn delay={0.5}>
          <div className="flex items-baseline gap-8 justify-center mt-6">
            <CountUp target={22} delay={0.6} duration={1.5} suffix="%" className="text-6xl md:text-8xl font-black text-depth" />
            <span className="text-3xl md:text-5xl font-light text-[#1a1a1a]">&mdash;</span>
            <CountUp target={94} delay={0.8} duration={1.8} suffix="%" className="text-6xl md:text-8xl font-black text-depth-accent" />
          </div>
        </ScaleIn>

        <FadeUp delay={0.9}>
          <p className="text-lg text-depth-subtle max-w-2xl leading-relaxed mt-6">
            Tasa de alucinación en los 26 modelos más usados del mundo en tareas exigentes.
          </p>
        </FadeUp>

        <FadeUp delay={1}>
          <p className="text-lava/25 text-xs font-mono tracking-[0.15em] mt-2">
            Stanford AI Index 2026
          </p>
        </FadeUp>

        <BlurReveal delay={1.2}>
          <div className="mt-8">
            <p className="text-2xl font-bold text-depth">
              <CountUp target={362} delay={1.3} duration={2} prefix="+" className="text-2xl font-bold text-depth" />
              {' '}
              <span className="text-[#555] text-lg font-normal">
                incidentes documentados de IA en 2025
              </span>
            </p>
            <p className="text-amber-accent/40 text-sm mt-4">
              55% más que en 2024
            </p>
          </div>
        </BlurReveal>
      </div>
    </SlideWrapper>
  )
}
