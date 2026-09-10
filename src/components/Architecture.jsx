import { motion } from 'framer-motion'
import { GitCommit, Box, FlaskConical, Layers, Rocket, HeartPulse, ArrowRight } from 'lucide-react'

const stages = [
  { icon: GitCommit, title: 'git push', desc: 'Code lands on a PR or main' },
  { icon: Box, title: 'Docker build', desc: 'Multi-stage builder + lint + tests' },
  { icon: FlaskConical, title: 'Quality gate', desc: 'Unit tests run in an isolated container' },
  { icon: Layers, title: 'Terraform plan/apply', desc: 'Infra diffed and synced as code' },
  { icon: Rocket, title: 'Deploy / promote', desc: 'Preview on PR, --prod on main' },
  { icon: HeartPulse, title: 'Smoke test', desc: 'GET /api/health must return 200' },
]

export default function Architecture() {
  return (
    <section id="architecture" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 font-mono-ui text-xs font-bold uppercase tracking-widest text-white">Pipeline</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">From git push to live edge deployment.</h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Every project ships through the same four gates: build & test in a container, sync infrastructure with Terraform,
            deploy or promote through Vercel/Netlify, and verify with a real health check before the job is marked done.
          </p>
        </motion.div>

        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3">
            {stages.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-1 flex-col items-center gap-3 text-center"
              >
                <div className="w-full rounded-xl border border-border bg-black/40 p-4">
                  <s.icon className="mx-auto h-5 w-5 text-white lg:mx-0" />
                  <p className="mt-3 font-mono-ui text-sm font-semibold text-white">{s.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{s.desc}</p>
                </div>
                {i < stages.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-slate-700 lg:mx-1 lg:my-3 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
