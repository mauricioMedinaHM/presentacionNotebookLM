import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ScaleIn } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { AtSign, MapPin } from 'lucide-react'

export default function Slide18() {
  return (
    <SlideWrapper>
      <GlowOrb color="lava" size={600} x="50%" y="50%" />
      <GlowOrb color="amber" size={400} x="20%" y="30%" delay={0.5} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        <ScaleIn delay={0.3}>
          <h2 className="text-5xl md:text-7xl font-black text-depth">
            Muchas <span className="text-depth-accent">gracias</span>
          </h2>
        </ScaleIn>

        <FadeUp delay={0.6}>
          <div className="pt-16 pb-12 space-y-3">
            <p className="text-depth font-semibold text-2xl">Mauricio Medina</p>
            <p className="text-[#888] text-sm">Desarrollador &middot; CuyoConnect</p>
            <div className="flex items-center justify-center gap-2 text-[#666] text-xs">
              <MapPin className="w-3 h-3" strokeWidth={1.5} />
              <span>Mendoza, Argentina</span>
            </div>
          </div>
        </FadeUp>

        <ScaleIn delay={1}>
          <img
            src="/qrIgMauri.png"
            alt="QR Instagram @mauri.h.m"
            className="w-60 h-60 rounded-2xl object-cover border border-white/10"
          />
        </ScaleIn>

        <FadeUp delay={1.4}>
          <div className="pt-10 flex items-center gap-3">
            <AtSign className="w-6 h-6 text-lava" strokeWidth={1.8} />
            <span className="text-depth text-2xl font-medium tracking-wide">@mauri.h.m</span>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  )
}
