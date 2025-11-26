
export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-bg" style={{backgroundImage:`url('/assets/hero.jpg')`}} />
      <div className="container hero-content">
        <div className="couple-photo">
          <img src="/assets/couple.jpg" alt="Couple" />
        </div>
        <div className="hero-text">
          <h1 className="names">Ananya & Raj</h1>
          <p className="date">Saturday, December 20, 2025 • 5:00 PM</p>
          <p className="venue">The Grand Palace, Mumbai</p>
        </div>
      </div>
    </section>
  )
}
