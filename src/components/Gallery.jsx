
const images = [
  '/assets/gallery-1.jpg','/assets/gallery-2.jpg','/assets/gallery-3.jpg',
  '/assets/gallery-4.jpg','/assets/gallery-5.jpg','/assets/gallery-6.jpg'
]

export default function Gallery(){
  return (
    <section id="gallery" className="gallery container">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src,i)=> (
          <div key={i} className="gallery-item">
            <img src={src} alt={`Gallery ${i+1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}
