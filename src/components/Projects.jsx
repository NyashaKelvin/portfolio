import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 font-mono-ui text-xs font-bold uppercase tracking-widest text-white">Featured architecture & projects</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Systems, not just snippets.</h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Three shipped products spanning data platforms, full-stack apps, and infrastructure, each built and deployed end
            to end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass flex flex-col items-center rounded-2xl p-6 text-center transition-all hover:border-white/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono-ui text-xs font-bold uppercase tracking-wide text-white">{p.tag}</p>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-white">{p.title}</h3>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.description}</p>

              <div className="mt-4 space-y-2 border-t border-border/70 pt-4 text-xs">
                <p><span className="font-semibold text-slate-300">Problem solved: </span><span className="text-slate-500">{p.problem}</span></p>
                <p><span className="font-semibold text-slate-300">Key features: </span><span className="text-slate-500">{p.features}</span></p>
                <p><span className="font-semibold text-slate-300">Impact: </span><span className="text-slate-500">{p.impact}</span></p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-border px-2 py-1 font-mono-ui text-[11px] text-slate-400">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-white transition-transform group-hover:translate-x-1"
              >
                <Github className="h-4 w-4" /> View repository <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
