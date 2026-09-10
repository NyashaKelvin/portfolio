import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="text-center">
              <p className="mb-3 font-mono-ui text-xs font-bold uppercase tracking-widest text-white">Contact</p>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Let's build reliable systems together.</h2>
              <p className="mx-auto mt-4 max-w-md text-slate-400 leading-relaxed">
                Available for DevOps engineering, infrastructure automation, and platform reliability work, from
                containerizing an app to standing up a full CI/CD and IaC pipeline.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-md border border-transparent px-1 text-sm text-slate-300 transition-colors hover:border-white">
                  <Mail className="h-4 w-4 text-white" /> {profile.email}
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md border border-transparent px-1 text-sm text-slate-300 transition-colors hover:border-white">
                  <Github className="h-4 w-4 text-white" /> github.com/{profile.githubHandle}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md border border-transparent px-1 text-sm text-slate-300 transition-colors hover:border-white">
                  <Linkedin className="h-4 w-4 text-white" /> linkedin.com/in/nyashakelvin-madoro
                </a>
                <p className="flex items-center gap-3 text-sm text-slate-500">
                  <MapPin className="h-4 w-4 text-white" /> {profile.location}
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
