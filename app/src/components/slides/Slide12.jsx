import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ClipReveal, BlurReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Upload, HelpCircle, Edit3, Link2, RotateCcw } from 'lucide-react'

const steps = [
  { num: '1', text: 'Cargo las fuentes en NotebookLM', Icon: Upload },
  { num: '2', text: 'Pregunto TODO lo que no entiendo', Icon: HelpCircle },
  { num: '3', text: 'Anoto con mis palabras en Obsidian', Icon: Edit3 },
  { num: '4', text: 'Enlazo conceptos entre sí', Icon: Link2 },
  { num: '5', text: 'Vuelvo días después a repasar y profundizar', Icon: RotateCcw },
]

export default function Slide12() {
  const stepsRef = useRef([])
  const noteRef = useRef(null)

  useEffect(() => {
    stepsRef.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el,
        { opacity: 0, x: -40, filter: 'blur(4px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.7, delay: 0.5 + i * 0.15, ease: 'power3.out' }
      )
    })
    if (noteRef.current) {
      gsap.to(noteRef.current, {
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="lava" size={400} x="10%" y="30%" />
      <GlowOrb color="amber" size={400} x="90%" y="70%" delay={1} />

      <div className="relative z-10 w-full max-w-4xl space-y-12">
        <ClipReveal delay={0.2}>
          <h2 className="text-5xl md:text-7xl font-black font-display text-depth text-center tracking-tight">
            EL <span className="text-depth-accent">FLUJO</span>
          </h2>
        </ClipReveal>

        <div className="space-y-6 pt-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={el => stepsRef.current[i] = el}
              className="flex items-center gap-8 py-4"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-5 flex-shrink-0">
                <span className="text-lava font-mono font-bold text-xl w-6">{step.num}.</span>
                <step.Icon className="w-6 h-6 text-lava/80" strokeWidth={1.5} />
              </div>
              <span className="text-gray-300/90 text-xl">{step.text}</span>
            </div>
          ))}
        </div>

        <BlurReveal delay={1.4}>
          <p ref={noteRef} className="text-center text-amber-accent text-lg max-w-xl mx-auto tracking-wide mt-4" style={{ opacity: 0.7 }}>
            Esto no es estudiar con IA. Es aplicar ciencia del aprendizaje, con IA acelerándolo.
          </p>
        </BlurReveal>
      </div>
    </SlideWrapper>
  )
}
