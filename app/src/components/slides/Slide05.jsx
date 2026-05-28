import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ClipReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const models = [
  { name: 'Claude (Anthropic)', model: '3.7 Sonnet / Opus', range: '15% – 22%', pct: 18.5, color: '#FF6A2A' },
  { name: 'ChatGPT (OpenAI)', model: 'GPT-4.1 / 4o', range: '18% – 25%', pct: 21.5, color: '#FFB800' },
  { name: 'Gemini (Google)', model: '2.0 Pro', range: '20% – 28%', pct: 24, color: '#FF3B3B' },
  { name: 'DeepSeek', model: 'V3 / R1', range: '24% – 32%', pct: 28, color: '#FF3B3B' },
]

export default function Slide05() {
  const barsRef = useRef([])
  const noteRef = useRef(null)

  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (!bar) return
      gsap.fromTo(bar,
        { width: 0 },
        { width: `${models[i].pct * 2.5}%`, duration: 1.2, delay: 0.6 + i * 0.15, ease: 'power3.out' }
      )
    })
    if (noteRef.current) {
      gsap.to(noteRef.current, {
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <SlideWrapper>
      <GlowOrb color="lava" size={400} x="15%" y="30%" />
      <GlowOrb color="amber" size={400} x="85%" y="70%" delay={1} />

      <div className="relative z-10 w-full max-w-5xl space-y-10">
        <ClipReveal delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-depth text-center tracking-tight">
            ¿Cuánto miente la IA que usás todos los días?
          </h2>
        </ClipReveal>

        <FadeUp delay={0.35}>
          <p className="text-[#bbb] text-center text-lg tracking-wide mt-3">
            Tasa de alucinación en alta complejidad
          </p>
        </FadeUp>

        <div className="space-y-4 pt-4">
          {models.map((m, i) => (
            <FadeUp key={m.name} delay={0.4 + i * 0.15}>
              <div className="flex items-center gap-8 py-7 px-8 rounded-xl bg-surface/30">
                <div className="w-48 md:w-56 text-left flex-shrink-0">
                  <p className="text-white font-bold text-lg">{m.name}</p>
                  <p className="text-white/80 font-medium text-base mt-2">{m.model}</p>
                </div>
                <div className="flex-1 h-6 bg-surface-alt rounded-full overflow-hidden relative">
                  <div
                    ref={el => barsRef.current[i] = el}
                    className="h-full rounded-full"
                    style={{ width: 0, background: m.color }}
                  />
                </div>
                <span className="text-[#ccc] font-mono text-lg w-28 text-right flex-shrink-0">
                  {m.range}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={1.2}>
          <p ref={noteRef} className="text-center text-[#bbb] text-lg tracking-wide mt-6" style={{ opacity: 0.7 }}>
            Ninguna está libre. La pregunta no es si se equivoca, es cuánto.
          </p>
        </FadeUp>
      </div>
    </SlideWrapper>
  )
}
