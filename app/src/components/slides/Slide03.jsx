import SlideWrapper from '../ui/SlideWrapper'
import { FadeUp, ClipReveal } from '../ui/AnimatedText'
import GlowOrb from '../ui/GlowOrb'
import { OrbitingCircles } from '../magicui/orbiting-circles'
import { BookOpen, Video, Image, FileText, Brain } from 'lucide-react'

export default function Slide03() {
  return (
    <SlideWrapper>
      <GlowOrb color="amber" size={500} x="50%" y="40%" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-16 w-full max-w-6xl">
        <div className="flex-1 space-y-10">
          <ClipReveal delay={0.4}>
            <h2 className="text-5xl md:text-7xl font-extrabold font-display text-depth leading-tight tracking-tight">
              NotebookLM como nuestro{' '}
              <span className="text-depth-accent">segundo cerebro</span>
            </h2>
          </ClipReveal>

          <FadeUp delay={0.7}>
            <p className="text-xl md:text-2xl text-depth-subtle max-w-xl leading-relaxed mt-4">
              En esta IA podemos meter cientos de libros, videos e imágenes y lo va a guardar en su contexto.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.5} className="flex-shrink-0">
          <div className="relative flex items-center justify-center w-[340px] h-[340px]">
            <Brain className="w-12 h-12 text-lava/60" strokeWidth={1.3} />

            <OrbitingCircles radius={100} duration={25} iconSize={44} speed={1}>
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-surface/80 border border-white/[0.06]">
                <BookOpen className="w-5 h-5 text-lava/60" strokeWidth={1.5} />
              </div>
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-surface/80 border border-white/[0.06]">
                <Video className="w-5 h-5 text-amber-accent/60" strokeWidth={1.5} />
              </div>
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-surface/80 border border-white/[0.06]">
                <Image className="w-5 h-5 text-lava/60" strokeWidth={1.5} />
              </div>
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-surface/80 border border-white/[0.06]">
                <FileText className="w-5 h-5 text-amber-accent/60" strokeWidth={1.5} />
              </div>
            </OrbitingCircles>

            <OrbitingCircles radius={150} duration={35} iconSize={32} reverse speed={0.8} path={false}>
              <div className="w-2 h-2 rounded-full bg-lava/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-accent/20" />
              <div className="w-2 h-2 rounded-full bg-lava/20" />
            </OrbitingCircles>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  )
}
