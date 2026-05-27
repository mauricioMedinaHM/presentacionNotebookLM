import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ScaleIn, StaggerReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { NumberTicker } from '../magicui/number-ticker'
import { FlaskConical, X, Check } from 'lucide-react'

const noFunciona = [
  'Releer el PDF 10 veces',
  'Subrayar y resaltar',
  'Estudio masivo (cramming)',
]

const siFunciona = [
  'Retrieval Practice (práctica de recuperación)',
  'Spaced Repetition (repaso espaciado)',
  'Volver al tema días después',
]

export default function Slide13() {
  return (
    <SlideWrapper>
      <GlowOrb color="amber" size={500} x="50%" y="30%" />

      <div className="relative z-10 w-full max-w-5xl space-y-8">
        <FadeUp delay={0.2}>
          <div className="flex items-center justify-center gap-3 mb-2">
            <FlaskConical className="w-5 h-5 text-amber-accent" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-depth tracking-tight">
              La ciencia confirma el método
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex items-baseline justify-center gap-5 mt-4">
            <NumberTicker value={170000} delay={0.5} className="text-5xl md:text-6xl font-black font-display text-depth-accent" />
            <span className="text-[#ccc] text-xl">personas</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="text-[#bbb] text-lg text-center tracking-wide mt-2">
            Meta-análisis (Hattie & Donoghue, 2021) sobre 242 estudios de técnicas de aprendizaje
          </p>
        </FadeUp>

        <FadeUp delay={0.6}>
          <p className="text-depth-subtle text-center text-xl mt-6">
            Las 2 técnicas más efectivas, por encima de todas las demás:
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-16 pt-8">
          <FadeUp delay={0.8}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <span className="text-primary font-semibold text-lg tracking-wide uppercase">No funciona</span>
              </div>
              <div className="space-y-5 pl-1">
                {noFunciona.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-[#ccc]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.9}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-amber-accent" strokeWidth={1.5} />
                <span className="text-amber-accent font-semibold text-lg tracking-wide uppercase">Sí funciona</span>
              </div>
              <StaggerReveal delay={1} stagger={0.15} className="space-y-5 pl-1">
                {siFunciona.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-300/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-accent/80 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </StaggerReveal>
            </div>
          </FadeUp>
        </div>
      </div>
    </SlideWrapper>
  )
}
