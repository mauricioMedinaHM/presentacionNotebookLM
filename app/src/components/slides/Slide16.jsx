import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ScaleIn, BlurReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Quote } from 'lucide-react'

export default function Slide16() {
  const quoteRef = useRef(null)
  const goodRef = useRef(null)
  const badRef = useRef(null)

  useEffect(() => {
    if (quoteRef.current) {
      gsap.to(quoteRef.current, {
        scale: 1.1,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
    if (goodRef.current) {
      gsap.to(goodRef.current, {
        x: 4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
    if (badRef.current) {
      gsap.to(badRef.current, {
        x: -4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="lava" size={700} x="50%" y="50%" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-10">
        <ScaleIn delay={0.3}>
          <div ref={quoteRef}>
            <Quote className="w-10 h-10 text-lava/15" strokeWidth={1.2} />
          </div>
        </ScaleIn>

        <BlurReveal delay={0.5}>
          <h2 className="text-3xl md:text-5xl font-bold text-depth leading-relaxed mt-6">
            &ldquo;Esta tecnología es un{' '}
            <span className="text-depth-accent">amplificador</span>.&rdquo;
          </h2>
        </BlurReveal>

        <div className="space-y-6 pt-10">
          <FadeUp delay={0.9}>
            <p ref={goodRef} className="text-xl md:text-2xl text-white/80">
              Al que piensa, lo hace pensar más.
            </p>
          </FadeUp>

          <FadeUp delay={1.1}>
            <p ref={badRef} className="text-base md:text-lg text-white/45">
              Al que delega todo sin chequear, lo hace cada vez más dependiente.
            </p>
          </FadeUp>
        </div>
      </div>
    </SlideWrapper>
  )
}
