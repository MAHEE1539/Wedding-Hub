import Details from './components/Details'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import RSVP from './components/RSVP'
import Story from './components/Story'
import Notify from './components/Notify'
import Map from './components/Map'

export default function App(){
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
        <img src="/assets/f1.webp" className='flower-left' alt="" />
        <img src="/assets/f1.webp" className='flower-right' alt="" />
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
