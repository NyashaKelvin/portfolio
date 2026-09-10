import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { profile } from '../data.js'

const cvFilename = import.meta.env.VITE_CV_FILENAME || 'NyashaKelvinCV.pdf'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28 dot-grid">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 text-center">
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            AUTOMATING <span className="text-white">INFRASTRUCTURE.</span>
            <br />
            SCALING <span className="font-bold text-white">APPLICATIONS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={`/${cvFilename}`}
              download={cvFilename}
              className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105 hover:bg-slate-200"
            >
              Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-16 hidden justify-center md:flex"
      >
        <ArrowDown className="h-5 w-5 animate-bounce text-slate-600" />
      </motion.div>
    </section>
  )
}
