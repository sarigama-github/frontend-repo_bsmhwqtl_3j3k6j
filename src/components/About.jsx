import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, GraduationCap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-4 text-white/80">
            Dynamic MERN Stack Developer and UI/UX Designer passionate about intuitive digital experiences. Skilled in responsive design, API integration, real-time systems, and full-stack web apps. Proven ability to transform complex ideas into seamless UIs with solid backend architecture.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 text-white/80"><MapPin size={18} className="text-cyan-300"/> Islamabad, Pakistan</div>
            <div className="flex items-center gap-3 text-white/80"><GraduationCap size={18} className="text-cyan-300"/> FAST NUCES, BS Software Engineering (2022–2026)</div>
            <a href="mailto:saeed.usairam@gmail.com" className="flex items-center gap-3 text-cyan-300 hover:text-cyan-200"><Mail size={18}/> saeed.usairam@gmail.com</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#06b6d4]/10 via-[#06f0d4]/10 to-[#9be8e0]/10 p-0 backdrop-blur"
        >
          <div className="relative h-64 w-full overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.25),transparent_40%),_radial-gradient(circle_at_70%_80%,rgba(155,232,224,0.25),transparent_40%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-40 -skew-x-6 rounded-xl border border-white/10 bg-white/10" />
              <div className="ml-4 h-16 w-16 rotate-12 rounded-lg border border-white/10 bg-white/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
