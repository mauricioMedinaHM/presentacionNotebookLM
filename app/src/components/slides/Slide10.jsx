import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ScaleIn, ClipReveal, StaggerReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Monitor, PenLine, FileCode, Sparkles } from 'lucide-react'

const tools = [
  { name: 'Notion', Icon: PenLine },
  { name: 'Google Docs', Icon: FileCode },
  { name: 'Obsidian', Icon: Sparkles },
]

export default function Slide10() {
  const iconRef = useRef(null)
  const noteRef = useRef(null)

  useEffect(() => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotate: 4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
    if (noteRef.current) {
      gsap.to(noteRef.current, {
        opacity: 0.7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="amber" size={500} x="50%" y="50%" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-14">
        <ScaleIn delay={0.2}>
          <div ref={iconRef}>
            <Monitor className="w-12 h-12 text-amber-accent" strokeWidth={1.3} />
          </div>
        </ScaleIn>

        <ClipReveal delay={0.4}>
          <h2 className="text-4xl md:text-6xl font-extrabold font-display text-depth leading-tight tracking-tight mt-4">
            Abramos{' '}
            <span className="text-depth-accent">NotebookLM</span>
            {' '}y nuestro notepad preferido
          </h2>
        </ClipReveal>

        <FadeUp delay={0.7}>
          <p className="text-xl md:text-2xl text-depth-subtle mt-4">
            Puede ser Notion, Google Docs o Obsidian
          </p>
        </FadeUp>

        <StaggerReveal delay={1} stagger={0.12} className="flex flex-wrap justify-center gap-16 pt-4">
          {tools.map(({ name, Icon }) => (
            <div key={name} className="flex flex-col items-center gap-4">
              <Icon className="w-8 h-8 text-lava/80" strokeWidth={1.5} />
              <span className="text-white/80 text-xl font-medium tracking-wide">{name}</span>
            </div>
          ))}
        </StaggerReveal>

        <FadeUp delay={1.3}>
          <p ref={noteRef} className="text-[#bbb] text-lg tracking-wide mt-6" style={{ opacity: 0.7 }}>
            Lo más importante es que interprete archivos Markdown
          </p>
        </FadeUp>
      </div>
    </SlideWrapper>
  )
}
