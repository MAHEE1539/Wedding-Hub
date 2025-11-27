import { useEffect } from 'react'
import Details from './components/Details'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Map from './components/Map'
import Notify from './components/Notify'
import RSVP from './components/RSVP'
import Story from './components/Story'

export default function App(){
  useEffect(()=>{
    const nodes = Array.from(document.querySelectorAll('[data-animate-on-scroll]'))
    if(!nodes.length) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in-view')
        } else {
          entry.target.classList.remove('in-view')
        }
      })
    }, { threshold: 0.35 })
    nodes.forEach(n=>obs.observe(n))
    return ()=> obs.disconnect()
  }, [])

  return (
    <div className="site-root">
      {/* Floating flowers (decorative) - uses images placed in `public/assets/` named float1, float2, ... */}
      {/* <div className="floating-container" aria-hidden="true">
        <img src="/assets/float1.webp" className="float-img float-1" alt="" />
        <img src="/assets/float2.webp" className="float-img float-2" alt="" />
        <img src="/assets/float3.png" className="float-img float-3" alt="" />
        <img src="/assets/float4.webp" className="float-img float-4" alt="" />
      </div> */}
      <div className="garland">
        <img src="/assets/garland1.png" className="garland1" alt="" />
      </div>

      <div className="flower">
        <img src="/assets/garland1.png" className='flower-left' alt="" />
        <img src="/assets/garland1.png" className='flower-right' alt="" />
      </div>

      <Header />
      <main>
        <Hero />
        <Details />
        <Notify />
        <Map />
        <Story />
        <Gallery />
        <RSVP />
      </main>
      <Footer />
    </div>
  )
}
