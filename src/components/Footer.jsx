import { profile } from '../data.js'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center">
        <p className="font-mono-ui text-sm text-slate-400">{profile.name}</p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            title="Email"
            className="rounded-md border border-transparent p-1 text-slate-500 transition-colors hover:border-white"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="rounded-md border border-transparent p-1 text-slate-500 transition-colors hover:border-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="rounded-md border border-transparent p-1 text-slate-500 transition-colors hover:border-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <p className="font-mono-ui text-xs text-slate-600">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
      </div>
    </footer>
  )
}
