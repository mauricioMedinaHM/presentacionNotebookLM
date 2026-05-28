import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ScaleIn } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { Ripple } from '../magicui/ripple'
import { SparklesText } from '../magicui/sparkles-text'
import { AtSign, MapPin } from 'lucide-react'

export default function Slide18() {
  return (
    <SlideWrapper>
      <GlowOrb color="lava" size={600} x="50%" y="50%" />
      <GlowOrb color="amber" size={400} x="20%" y="30%" delay={0.5} />
      <Ripple mainCircleSize={180} mainCircleOpacity={0.08} numCircles={6} color="rgba(255, 106, 42, 0.08)" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        <ScaleIn delay={0.3}>
          <h2 className="text-5xl md:text-7xl font-black font-display text-depth">
            Muchas{' '}
            <SparklesText
              colors={{ first: '#FF6A2A', second: '#FFB800' }}
              sparklesCount={8}
              className="text-depth-accent"
            >
              gracias
            </SparklesText>
          </h2>
        </ScaleIn>

        <FadeUp delay={0.6}>
          <div className="pt-16 pb-12 space-y-3">
            <p className="text-depth font-semibold text-3xl">Mauricio Medina</p>
            <p className="text-[#ccc] text-lg">Desarrollador &middot; CuyoConnect</p>
            <div className="flex items-center justify-center gap-2 text-[#ccc] text-base">
              <MapPin className="w-4 h-4" strokeWidth={1.5} />
              <span>Mendoza, Argentina</span>
            </div>
          </div>
        </FadeUp>

        <ScaleIn delay={1}>
          <img
            src="/qrMauri.jpeg"
            alt="QR Instagram @mauri.h.m"
            className="w-64 h-64 rounded-2xl object-cover border border-white/15"
          />
        </ScaleIn>

        <FadeUp delay={1.4}>
          <div className="pt-10 flex items-center gap-3">
            <AtSign className="w-7 h-7 text-lava" strokeWidth={1.8} />
            <span className="text-depth text-3xl font-medium tracking-wide">@mauri.h.m</span>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  )
}
