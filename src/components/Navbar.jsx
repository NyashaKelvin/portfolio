import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'backdrop-blur-md bg-black/80 border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleClick('#hero') }} className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="text-white">
            {profile.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono-ui text-sm text-slate-400">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                className="rounded-md border border-transparent px-1 transition-colors hover:border-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:block">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleClick('#contact') }}
            className="rounded-lg border border-transparent bg-white px-4 py-2 text-sm font-bold text-black transition-transform hover:scale-105 hover:border-white hover:bg-slate-200"
          >
            Get In Touch
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden glass-strong border-t border-border px-5 py-4"
        >
          <ul className="flex flex-col items-center gap-4 font-mono-ui text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => { e.preventDefault(); handleClick(link.href) }}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleClick('#contact') }} className="inline-block rounded-lg border border-transparent bg-white px-4 py-2 font-bold text-black hover:border-white">
                Get In Touch
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
