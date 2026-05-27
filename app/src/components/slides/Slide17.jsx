import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ClipReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import PulsingDots from '../ui/PulsingDots'

export default function Slide17() {
  return (
    <SlideWrapper>
      <GlowOrb color="lava" size={500} x="50%" y="40%" />
      <GlowOrb color="amber" size={400} x="30%" y="70%" delay={1} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-10">
        <FadeUp delay={0.2}>
          <p className="text-2xl text-[#ccc] tracking-wide">
            Todos buscamos lo mismo.
          </p>
        </FadeUp>

        <ClipReveal delay={0.5}>
          <h2 className="text-4xl md:text-6xl font-bold font-display text-depth leading-relaxed mt-6">
            Que salgan de acá
            <br />
            siendo{' '}
            <span className="text-depth-accent">mejores profesionales</span>
            <br />
            de los que entraron.
          </h2>
        </ClipReveal>

        <FadeUp delay={1}>
          <div className="pt-8">
            <PulsingDots count={5} className="justify-center" />
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  )
}
