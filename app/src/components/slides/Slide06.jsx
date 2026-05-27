import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ScaleIn, BlurReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { NumberTicker } from '../magicui/number-ticker'
import { BorderBeam } from '../magicui/border-beam'
import { AlertTriangle } from 'lucide-react'

export default function Slide06() {
  return (
    <SlideWrapper>
      <GlowOrb color="red" size={500} x="50%" y="40%" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-10">
        <FadeUp delay={0.2}>
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-primary" strokeWidth={1.5} />
            <span className="text-primary text-base font-medium uppercase tracking-[0.25em]">
              El problema es real
            </span>
          </div>
        </FadeUp>

        <ScaleIn delay={0.5}>
          <div className="flex items-baseline gap-8 justify-center mt-6">
            <NumberTicker value={22} delay={0.6} suffix="%" className="text-7xl md:text-9xl font-black font-display text-depth" />
            <span className="text-4xl md:text-5xl font-light text-[#5a5a6a]">&mdash;</span>
            <NumberTicker value={94} delay={0.8} suffix="%" className="text-7xl md:text-9xl font-black font-display text-depth-accent" />
          </div>
        </ScaleIn>

        <FadeUp delay={0.9}>
          <p className="text-xl text-depth-subtle max-w-2xl leading-relaxed mt-6">
            Tasa de alucinación en los 26 modelos más usados del mundo en tareas exigentes.
          </p>
        </FadeUp>

        <FadeUp delay={1}>
          <p className="text-lava text-base font-mono tracking-[0.15em] mt-2">
            Stanford AI Index 2026
          </p>
        </FadeUp>

        <BlurReveal delay={1.2}>
          <div className="relative mt-8 px-10 py-8 rounded-2xl bg-surface/30 overflow-hidden">
            <BorderBeam size={80} duration={8} colorFrom="#FF3B3B" colorTo="#FF6A2A" borderWidth={1.5} />
            <p className="text-2xl font-bold text-depth">
              <NumberTicker value={362} delay={1.3} prefix="+" className="text-2xl font-bold text-depth" />
              {' '}
              <span className="text-[#ccc] text-xl font-normal">
                incidentes documentados de IA en 2025
              </span>
            </p>
            <p className="text-amber-accent text-lg mt-4">
              55% más que en 2024
            </p>
          </div>
        </BlurReveal>
      </div>
    </SlideWrapper>
  )
}
