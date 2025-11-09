import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Download, Mail, Globe } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0b0b12]">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0b12] to-transparent" />

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <button
            onClick={() => scrollToId('home')}
            className="text-xs font-bold tracking-[0.25em] text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 rounded"
            aria-label="Scroll to top"
          >
            USAIRAM
          </button>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <button onClick={() => scrollToId('about')} className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60 rounded px-1">About</button>
            <button onClick={() => scrollToId('skills')} className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60 rounded px-1">Skills</button>
            <button onClick={() => scrollToId('projects')} className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60 rounded px-1">Projects</button>
            <button onClick={() => scrollToId('contact')} className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60 rounded px-1">Contact</button>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="mailto:saeed.usairam@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              <Mail size={14}/> saeed.usairam@gmail.com
            </a>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-wider text-cyan-300 ring-1 ring-white/15 backdrop-blur"
        >
          Islamabad, Pakistan • Full Stack • UI/UX
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl font-extrabold leading-tight text-white md:text-6xl"
        >
          Usairam Saeed
          <span className="block bg-gradient-to-r from-[#06b6d4] via-[#06f0d4] to-[#9be8e0] bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
            Full Stack Developer & UI/UX Designer
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 max-w-2xl text-base text-white/80 md:text-lg"
        >
          Transforming complex ideas into seamless digital experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollToId('projects')}
            className="group rounded-2xl bg-cyan-400/90 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/30 transition-transform hover:-translate-y-0.5 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          >
            View Projects
          </button>
          <a
            href="https://usairam-saeed.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            aria-label="Open portfolio to download resume"
          >
            <Download size={16} /> Download Resume
          </a>
          <div className="ml-2 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/usairam-saeed-148044285/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/saymi313"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://usairam-saeed.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              aria-label="Portfolio"
            >
              <Globe size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
