import logo from '../../assets/Logo.svg';

export default function Header() {
  return (
    <div className="header site-grid">
        <img src={logo} alt="Little Lemon Logo" />
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#order-online">Order Online</a></li>
          </ul>
        </nav>
    </div>)
}