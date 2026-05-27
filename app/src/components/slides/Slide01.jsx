import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ClipReveal, BlurReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Hand } from 'lucide-react'

export default function Slide01() {
  const handRef = useRef(null)

  useEffect(() => {
    if (handRef.current) {
      gsap.to(handRef.current, {
        rotate: 15,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="lava" size={600} x="50%" y="50%" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-16">
        <FadeUp delay={0.2}>
          <div ref={handRef}>
            <Hand className="w-14 h-14 text-lava/50" strokeWidth={1.5} />
          </div>
        </FadeUp>

        <ClipReveal delay={0.4}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-depth leading-tight tracking-tight">
            ¿Quién está estudiando algo{' '}
            <span className="text-depth-accent">en este momento</span>?
          </h2>
        </ClipReveal>

        <FadeUp delay={0.8}>
          <p className="text-xl md:text-2xl text-depth-subtle mt-2">
            Carrera, curso, o por su propia cuenta
          </p>
        </FadeUp>

        <BlurReveal delay={1.2}>
          <div className="flex items-center gap-4 pt-4">
            <span className="text-amber-accent/50 text-base tracking-wide">Carrera</span>
            <span className="text-[#2a2a2a]">/</span>
            <span className="text-amber-accent/50 text-base tracking-wide">Curso</span>
            <span className="text-[#2a2a2a]">/</span>
            <span className="text-amber-accent/50 text-base tracking-wide">Autodidacta</span>
          </div>
        </BlurReveal>
      </div>
    </SlideWrapper>
  )
}
