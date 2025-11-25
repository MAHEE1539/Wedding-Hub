import Details from './components/Details'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import RSVP from './components/RSVP'
import Story from './components/Story'

export default function App(){
  return (
    <div className="site-root">
      <Header />
      <main>
        <Hero />
        <Details />
        <Story />
        <Gallery />
        <RSVP />
      </main>
      <Footer />
    </div>
  )
}
