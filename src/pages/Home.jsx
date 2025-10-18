import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className='bg-white'>
      <div className='max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center'>
        <div>
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className='text-4xl font-bold text-slate-900'>Your Trusted Partner in Cybersecurity, Compliance & Resilience</motion.h1>
          <p className='mt-4 text-slate-600 max-w-xl'>CyGuardian helps South African and international organizations strengthen their cyber defenses, achieve ISO 27001 readiness, and ensure POPIA compliance.</p>
          <div className='mt-6 flex gap-3'>
            <Link to='/contact' className='px-5 py-3 bg-primary text-white rounded-md shadow'>Request a Consultation</Link>
            <a href='https://wa.me/27645427061' target='_blank' rel='noreferrer' className='px-5 py-3 border rounded-md'>Chat on WhatsApp</a>
          </div>
        </div>
        <div>
          <div className='bg-slate-50 border rounded-lg p-6'>
            <div className='text-sm text-slate-500'>Quick Readiness Snapshot</div>
            <div className='mt-4 grid grid-cols-2 gap-3'>
              <div className='p-3 border rounded-lg text-xs text-slate-700'>ISO 27001 controls — Annex A mapped</div>
              <div className='p-3 border rounded-lg text-xs text-slate-700'>POPIA alignment included</div>
              <div className='p-3 border rounded-lg text-xs text-slate-700'>Cyber risk & compliance services</div>
              <div className='p-3 border rounded-lg text-xs text-slate-700'>Typical timeline: 3–6 months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
