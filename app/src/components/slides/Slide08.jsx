import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ScaleIn, BlurReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Library, BookMarked } from 'lucide-react'

export default function Slide08() {
  const iconBadRef = useRef(null)
  const iconGoodRef = useRef(null)

  useEffect(() => {
    if (iconBadRef.current) {
      gsap.to(iconBadRef.current, {
        rotate: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
    if (iconGoodRef.current) {
      gsap.to(iconGoodRef.current, {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="lava" size={400} x="25%" y="60%" />
      <GlowOrb color="amber" size={400} x="75%" y="40%" delay={1} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl space-y-20">
        <BlurReveal delay={0.2}>
          <p className="text-3xl md:text-4xl text-depth-subtle leading-relaxed max-w-2xl">
            Si tu profe te da 3 libros con todas las respuestas...
          </p>
        </BlurReveal>

        <div className="flex flex-col md:flex-row items-center gap-20">
          <ScaleIn delay={0.5}>
            <div className="flex flex-col items-center gap-8 w-64">
              <div ref={iconBadRef}>
                <Library className="w-20 h-20 text-lava" strokeWidth={1.2} />
              </div>
              <p className="text-lava text-2xl font-bold leading-snug">
                ¿Vas a la biblioteca entera?
              </p>
            </div>
          </ScaleIn>

          <FadeUp delay={0.7}>
            <span className="text-3xl text-[#ccc] font-light">o</span>
          </FadeUp>

          <ScaleIn delay={0.9}>
            <div className="flex flex-col items-center gap-8 w-64">
              <div ref={iconGoodRef}>
                <BookMarked className="w-20 h-20 text-amber-accent" strokeWidth={1.2} />
              </div>
              <p className="text-amber-accent text-2xl font-bold leading-snug">
                ¿O te quedás con esos 3?
              </p>
            </div>
          </ScaleIn>
        </div>
      </div>
    </SlideWrapper>
  )
}
