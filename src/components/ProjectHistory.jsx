import { motion } from 'framer-motion'
import { projectHistory } from '../data.js'

export default function ProjectHistory() {
  return (
    <section className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 font-mono-ui text-xs font-bold uppercase tracking-widest text-white">Builder journey</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Project history.</h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            A focused path from full-stack products to platform engineering: containers, infrastructure as code, and
            deployment automation.
          </p>
        </motion.div>

        <div className="relative border-l border-border pl-8">
          {projectHistory.map((h, i) => (
            <motion.div
              key={h.step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-black font-mono-ui text-xs font-bold text-white">
                {h.step}
              </span>
              <h3 className="font-display text-base font-semibold text-white">{h.title}</h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-400">{h.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
