import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ClipReveal, StaggerReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { BookOpen, Video, Image, FileText, Brain } from 'lucide-react'

const items = [
  { Icon: BookOpen, label: 'Libros' },
  { Icon: Video, label: 'Videos' },
  { Icon: Image, label: 'Imágenes' },
  { Icon: FileText, label: 'PDFs' },
]

export default function Slide03() {
  const iconRef = useRef(null)

  useEffect(() => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        y: -12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="amber" size={500} x="50%" y="40%" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl space-y-10">
        <FadeUp delay={0.2}>
          <div ref={iconRef}>
            <Brain className="w-12 h-12 text-lava/40" strokeWidth={1.3} />
          </div>
        </FadeUp>

        <ClipReveal delay={0.4}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-depth leading-tight tracking-tight mt-4">
            NotebookLM como nuestro{' '}
            <span className="text-depth-accent">segundo cerebro</span>
          </h2>
        </ClipReveal>

        <FadeUp delay={0.7}>
          <p className="text-xl text-depth-subtle max-w-3xl leading-relaxed mt-4">
            En esta IA podemos meter cientos de libros, videos e imágenes y lo va a guardar en su contexto.
          </p>
        </FadeUp>

        <StaggerReveal delay={1} stagger={0.12} className="flex flex-wrap justify-center gap-12 pt-8">
          {items.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <Icon className="w-6 h-6 text-lava/30" strokeWidth={1.5} />
              <span className="text-[#666] text-sm tracking-wide">{label}</span>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </SlideWrapper>
  )
}
