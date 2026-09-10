import { motion } from 'framer-motion'
import { Container, FileTerminal, GitBranch, Cloud, Activity, Code2 } from 'lucide-react'
import { skillGroups } from '../data.js'

const ICONS = { Container, FileTerminal, GitBranch, Cloud, Activity, Code2 }

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 font-mono-ui text-xs font-bold uppercase tracking-widest text-white">Capability map</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">DevOps tech stack & skills.</h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            A practical blend of containerization, infrastructure as code, CI/CD automation, and the backend engineering that
            makes all of it worth deploying.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.icon]
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="glass flex flex-col items-center rounded-xl p-6 text-center transition-all hover:-translate-y-1 hover:border-white/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md border border-border bg-white/5 px-2.5 py-1 font-mono-ui text-xs text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
