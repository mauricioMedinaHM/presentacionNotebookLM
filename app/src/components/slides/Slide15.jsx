import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ClipReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Slide15() {
  const itemsRef = useRef([])

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el,
        { opacity: 0, x: -30, filter: 'blur(6px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, delay: 0.8 + i * 0.25, ease: 'power3.out' }
      )
      gsap.to(el, {
        x: 5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        delay: 2 + i * 0.5,
        ease: 'sine.inOut',
      })
    })
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="amber" size={500} x="40%" y="40%" />
      <GlowOrb color="lava" size={400} x="65%" y="65%" delay={1} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-10">
        <FadeUp delay={0.2}>
          <p className="text-xl text-[#555]">
            La IA no los va a hacer más inteligentes sola.
          </p>
        </FadeUp>

        <ClipReveal delay={0.5}>
          <h2 className="text-3xl md:text-5xl font-bold text-depth leading-relaxed mt-6">
            Ustedes se vuelven más inteligentes
          </h2>
        </ClipReveal>

        <div className="flex flex-col gap-8 pt-8">
          {[
            'preguntando bien,',
            'anotando bien,',
            'y volviendo a profundizar.',
          ].map((text, i) => (
            <p
              key={i}
              ref={el => itemsRef.current[i] = el}
              className="text-2xl md:text-3xl text-depth-accent font-semibold"
              style={{ opacity: 0 }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
