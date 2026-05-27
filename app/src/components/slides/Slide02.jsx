import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ClipReveal, BlurReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { Layers } from 'lucide-react'

export default function Slide02() {
  return (
    <SlideWrapper>
      <GlowOrb color="amber" size={500} x="25%" y="40%" />
      <GlowOrb color="lava" size={400} x="75%" y="60%" delay={1} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-10">
        <FadeUp delay={0.2}>
          <div className="flex items-center gap-3">
            <Layers className="w-4 h-4 text-lava/40" strokeWidth={1.5} />
            <span className="text-lava/50 text-xs font-medium uppercase tracking-[0.25em]">
              Concepto clave
            </span>
          </div>
        </FadeUp>

        <ClipReveal delay={0.4}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-depth leading-tight tracking-tight mt-4">
            La importancia del{' '}
            <span className="text-depth-accent">contexto</span>
          </h2>
        </ClipReveal>

        <FadeUp delay={0.7}>
          <p className="text-lg md:text-xl text-depth-subtle leading-relaxed max-w-2xl mt-4">
            Acá todos vamos a usar IA, pero busquemos entender lo que estamos haciendo con ella.
          </p>
        </FadeUp>

        <BlurReveal delay={1}>
          <p className="text-amber-accent/60 text-xl md:text-2xl font-medium leading-relaxed max-w-xl mt-6">
            La IA va a trabajar bajo el contexto que le podamos dar.
          </p>
        </BlurReveal>
      </div>
    </SlideWrapper>
  )
}
