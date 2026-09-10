import { motion } from 'framer-motion'
import { Server, ShieldCheck, GitMerge, Gauge } from 'lucide-react'

const points = [
  { icon: Server, label: 'Reproducible environments', text: 'Same container, same behaviour, from a laptop to production.' },
  { icon: GitMerge, label: 'Pipelines that gate, not just deploy', text: 'Lint, test, plan, and smoke-check before anything reaches users.' },
  { icon: ShieldCheck, label: 'Infrastructure as code', text: 'Every resource declared, reviewed, and versioned, nothing clicked into existence.' },
  { icon: Gauge, label: 'Boring in production', text: 'Observability and health checks so incidents get caught early, not by users.' },
]

export default function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 font-mono-ui text-xs font-bold uppercase tracking-widest text-white">About</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">A practical builder of production systems.</h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            I build the layer between "the app works" and "the app works reliably, for everyone, every time it ships." That means
            shipping full products end to end, frontend, backend, and the platform underneath, then formalising the parts that
            keep them alive: containers, infrastructure as code, and CI/CD that actually stops bad changes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass flex flex-col items-center rounded-xl p-5 text-center transition-colors hover:border-white/50"
            >
              <p.icon className="h-6 w-6 text-white" />
              <h3 className="mt-4 font-display text-sm font-semibold text-white">{p.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
