import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Mail, Send, ArrowUp, Linkedin, Github, Globe } from 'lucide-react'

export default function AchievementsContactFooter() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <section className="w-full bg-[#0b0b12] pt-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Achievements */}
        <div className="mb-10 flex items-center gap-3">
          <Award className="text-cyan-300"/> <h2 className="text-2xl font-bold">Achievements & Certifications</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            'Gold Medalist, ETEA 2022',
            '1st Place – Web Design Competition (Deenfest 2024)',
            "3rd Place – UI/UX Design Competition (NASCON’24)",
            'IBM UI/UX Certification',
            'Stanford Machine Learning',
            'Certified UI/UX (Udemy)',
            'Complete React Developer (Udemy)',
            'Devsinc Campus Ambassador',
          ].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/90"
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <div id="contact" className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-2 text-white/80">Have an idea or opportunity? Let’s build something great.</p>
            <div className="mt-3 flex items-center gap-2 text-cyan-300"><Mail size={16}/> saeed.usairam@gmail.com</div>
            <div className="mt-4 flex gap-3">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Linkedin size={18}/></a>
              <a href="https://github.com/UsairamSaeed" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Github size={18}/></a>
              <a href="#home" onClick={(e)=>{e.preventDefault();scrollTop()}} className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Globe size={18}/></a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-white/70">Name</label>
                <input required className="mt-1 w-full rounded-md border border-white/10 bg-[#0b0b12] px-3 py-2 text-sm text-white outline-none ring-0 focus:border-cyan-400/60"/>
              </div>
              <div>
                <label className="text-xs text-white/70">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border border-white/10 bg-[#0b0b12] px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60"/>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs text-white/70">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-md border border-white/10 bg-[#0b0b12] px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60" />
            </div>
            <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">
              <Send size={16}/> Send Message
            </button>
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-3 text-sm text-teal-300"
                >
                  Thanks! Your message has been sent.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-white/70">
          <p>© 2025 Usairam Saeed. All rights reserved.</p>
          <button onClick={scrollTop} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10">
            <ArrowUp size={16}/> Top
          </button>
        </div>
      </footer>
    </section>
  )
}
