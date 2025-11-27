
export default function Details(){
  return (
    <section id="details" className="details container">
      <h2>Wedding Details</h2>
      <div className="grid">
        <div className="card" data-animate-on-scroll>
          <h3>Ceremony</h3>
          <p>Venue: The Grand Palace</p>
          <p>Time: 5:00 PM</p>
        </div>
        <div className="card" data-animate-on-scroll>
          <h3>Reception</h3>
          <p>Venue: Rose Garden Banquet</p>
          <p>Time: 8:00 PM</p>
        </div>
        <div className="card" data-animate-on-scroll>
          <h3>Dress Code</h3>
          <p>Traditional</p>
        </div>
      </div>
    </section>
  )
}
