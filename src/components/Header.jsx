
export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">Wedding Hub</div>
        <nav className="nav">
          <a href="#details">Details</a>
          <a href="#story">Our Story</a>
          <a href="#gallery">Gallery</a>
          <a href="#rsvp" className="btn-primary">RSVP</a>
        </nav>
      </div>
    </header>
  )
}
