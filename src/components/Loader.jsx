import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 550)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <motion.div
            className="flex items-center gap-3 font-mono-ui text-sm text-slate-400"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white">
              <span className="absolute inset-0 animate-ping rounded-full border-2 border-white opacity-40" />
              <span className="text-white font-display font-bold text-xs">NK</span>
            </span>
            booting infrastructure<span className="animate-blink">_</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
