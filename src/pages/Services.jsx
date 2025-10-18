import React from 'react'

export default function Services() {
  return (
    <section className='bg-white py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold text-slate-900 mb-6'>Our Services</h1>
        <p className='text-slate-600 mb-10 max-w-3xl'>Our Cyber Risk, Compliance, and Resilience services provide organizations with a clear picture of their cyber risk posture and capabilities—helping them make informed decisions on where to invest and how to improve resilience.</p>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='p-6 border rounded-xl shadow-sm'>
            <h3 className='font-semibold text-lg text-slate-800 mb-2'>Cyber Risk Management</h3>
            <p className='text-slate-600 text-sm'>We assess, identify, and prioritize cyber risks to help organizations develop actionable mitigation strategies.</p>
          </div>
          <div className='p-6 border rounded-xl shadow-sm'>
            <h3 className='font-semibold text-lg text-slate-800 mb-2'>Compliance Readiness</h3>
            <p className='text-slate-600 text-sm'>We align your operations with international standards like ISO 27001 and local regulations like POPIA for full compliance assurance.</p>
          </div>
          <div className='p-6 border rounded-xl shadow-sm'>
            <h3 className='font-semibold text-lg text-slate-800 mb-2'>Resilience Strategy</h3>
            <p className='text-slate-600 text-sm'>We help build and maintain business continuity and incident response plans that protect your organization from cyber disruptions.</p>
          </div>
          <div className='p-6 border rounded-xl shadow-sm'>
            <h3 className='font-semibold text-lg text-slate-800 mb-2'>Advisory & Insights</h3>
            <p className='text-slate-600 text-sm'>Through consulting and ongoing insights, we help organizations keep up with emerging technologies and evolving threats.</p>
          </div>
          <div className='p-6 border rounded-xl shadow-sm'>
            <h3 className='font-semibold text-lg text-slate-800 mb-2'>Data & Decision Intelligence</h3>
            <p className='text-slate-600 text-sm'>Analytics-driven approaches to prioritise remediation and measure outcomes.</p>
          </div>
          <div className='p-6 border rounded-xl shadow-sm'>
            <h3 className='font-semibold text-lg text-slate-800 mb-2'>Managed Services</h3>
            <p className='text-slate-600 text-sm'>Ongoing cybersecurity monitoring, risk tracking, and compliance maintenance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
