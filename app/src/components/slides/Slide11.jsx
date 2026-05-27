import SlideWrapper from '../ui/SlideWrapper'
import { ScaleIn, GlitchReveal, WipeIn } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { SparklesText } from '../magicui/sparkles-text'
import { Meteors } from '../magicui/meteors'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Slide11() {
  const subRef = useRef(null)

  useEffect(() => {
    if (subRef.current) {
      gsap.to(subRef.current, {
        opacity: 0.9,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="lava" size={700} x="50%" y="50%" />
      <Meteors number={12} minDuration={4} maxDuration={10} className="opacity-30" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl space-y-14">
        <GlitchReveal delay={0.3}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-depth leading-tight tracking-tight">
            PREGUNTAR
            <br />
            <SparklesText
              colors={{ first: '#FF6A2A', second: '#FF3B3B' }}
              sparklesCount={12}
              className="text-depth-accent"
            >
              ABSOLUTAMENTE
            </SparklesText>
            <br />
            TODO.
          </h2>
        </GlitchReveal>

        <WipeIn delay={1}>
          <div
            className="h-[2px] w-72"
            style={{ background: 'linear-gradient(to right, transparent, #FF6A2A, transparent)' }}
          />
        </WipeIn>

        <ScaleIn delay={1.3}>
          <h3
            ref={subRef}
            className="text-3xl md:text-5xl font-bold font-display text-depth-subtle mt-2"
            style={{ opacity: 0.5 }}
          >
            NO DEJAR UNA SOLA DUDA.
          </h3>
        </ScaleIn>
      </div>
    </SlideWrapper>
  )
}
