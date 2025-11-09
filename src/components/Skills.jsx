import React from 'react'
import { motion } from 'framer-motion'
import { Code, Boxes } from 'lucide-react'

const frontend = ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS']
const backend = ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Socket.io']
const other = ['Docker', 'Kubernetes basics', 'Git']
const design = ['Figma', 'Adobe XD', 'Lightroom']

function Badge({ label }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.03 }}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90"
    >
      {label}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-10 flex items-center gap-3">
          <Code className="text-cyan-300"/> <h2 className="text-2xl font-bold">Skills</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="mb-4 text-lg font-semibold text-cyan-300">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {frontend.map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="mb-4 text-lg font-semibold text-teal-300">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {backend.map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="mb-4 text-lg font-semibold text-cyan-300">Other</h3>
            <div className="flex flex-wrap gap-3">
              {other.map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="mb-4 flex items-center gap-2"><Boxes className="text-teal-300"/><h3 className="text-lg font-semibold text-teal-300">Design Tools</h3></div>
            <div className="flex flex-wrap gap-3">
              {design.map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
