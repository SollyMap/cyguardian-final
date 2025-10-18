import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Insights from './pages/Insights'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App(){return (<div className='min-h-screen flex flex-col bg-white text-slate-900'><Header /><main className='flex-grow'><Routes><Route path='/' element={<Home/>} /><Route path='/services' element={<Services/>} /><Route path='/insights' element={<Insights/>} /><Route path='/about' element={<About/>} /><Route path='/contact' element={<Contact/>} /></Routes></main><Footer /><FloatingWhatsApp /></div>)}
