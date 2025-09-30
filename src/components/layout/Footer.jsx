import restaurant from '../../assets/images/restaurant.jpg';

export default function Footer() {
  return (
    <div className="footer site-grid">
      <img className="footer__image" src={restaurant} alt="Restaurant" loading="lazy" />

      <div className="footer__column footer__column--nav">
        <h5>Doormat Navigation</h5>
        <ul className="footer__list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#order-online">Order Online</a></li>
        </ul>
      </div>

      <div className="footer__column footer__column--contact">
        <h5>Contact</h5>
        <ul className="footer__list">
          <li>Adress</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>

      <div className="footer__column footer__column--social">
        <h5>Social Media Links</h5>
        <ul className="footer__list">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>
  );
}
