import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, BlurReveal, WipeIn } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Slide14() {
  const titleRef = useRef(null)

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, delay: 0.3, ease: 'power3.out' }
      )
      gsap.to(titleRef.current, {
        textShadow: '0 1px 2px rgba(0,0,0,0.6), 0 4px 12px rgba(255,106,42,0.15), 0 8px 32px rgba(255,106,42,0.08)',
        duration: 3,
        delay: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="lava" size={600} x="50%" y="50%" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-12">
        <div ref={titleRef} style={{ opacity: 0 }}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-depth leading-tight tracking-tight">
            No tengan miedo a{' '}
            <span className="text-depth-accent">preguntar</span>.
          </h2>
        </div>

        <WipeIn delay={0.9}>
          <div
            className="h-[2px] w-48"
            style={{ background: 'linear-gradient(to right, transparent, #FF6A2A, transparent)' }}
          />
        </WipeIn>

        <FadeUp delay={1.1}>
          <p className="text-2xl md:text-3xl text-depth-subtle leading-relaxed max-w-2xl mt-4">
            Preocúpense solo de entender{' '}
            <span className="text-depth font-semibold">todo a la perfección</span>.
          </p>
        </FadeUp>
      </div>
    </SlideWrapper>
  )
}
