import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, SlideIn, ClipReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import PulsingDots from '../ui/PulsingDots'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Slide00() {
  const lineRef = useRef(null)
  const photoRef = useRef(null)

  useEffect(() => {
    if (lineRef.current) {
      gsap.to(lineRef.current, {
        scaleX: 1,
        duration: 1.5,
        delay: 1,
        ease: 'power3.out',
      })
    }
    if (photoRef.current) {
      gsap.to(photoRef.current, {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="lava" size={500} x="15%" y="50%" />
      <GlowOrb color="amber" size={400} x="80%" y="30%" delay={1} />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-20 w-full max-w-6xl">
        <div className="flex-1 text-left space-y-10">
          <FadeUp delay={0.2}>
            <PulsingDots className="mb-4" />
          </FadeUp>

          <ClipReveal delay={0.4}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-depth leading-[1.1] tracking-tight">
              El{' '}
              <span className="text-depth-accent">Amplificador</span>
              <br />
              Cognitivo
            </h1>
          </ClipReveal>

          <FadeUp delay={0.8}>
            <p className="text-lg md:text-xl text-depth-subtle max-w-lg leading-relaxed mt-4">
              Cómo usar IA para estudiar, investigar y documentar mejor.
            </p>
          </FadeUp>

          <FadeUp delay={1.1}>
            <div className="flex items-center gap-5 pt-4">
              <div
                ref={lineRef}
                className="w-14 h-[2px] bg-lava/60 origin-left"
                style={{ transform: 'scaleX(0)' }}
              />
              <span className="text-lava/60 font-medium tracking-[0.2em] text-sm uppercase">
                Mauricio Medina
              </span>
            </div>
          </FadeUp>
        </div>

        <SlideIn direction="right" delay={0.5} className="flex-shrink-0">
          <div ref={photoRef} className="relative">
            <img
              src="/fotoMauricio.jpg"
              alt="Mauricio Medina"
              className="img-fade relative w-72 md:w-80 h-[26rem] md:h-[30rem] object-cover"
            />
          </div>
        </SlideIn>
      </div>

      <FadeUp delay={1.5} className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 text-[#333] text-xs z-10">
          <span className="tracking-[0.2em] uppercase text-[10px]">Usa las flechas para navegar</span>
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </FadeUp>
    </SlideWrapper>
  )
}
