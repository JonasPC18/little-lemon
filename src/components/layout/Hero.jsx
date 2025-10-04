import { useNavigate } from 'react-router-dom';
import restaurantfood from '../../assets/images/restauranfood.jpg';

export default function Hero() {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/booking');
  };

  return (
    <section className="hero">
      <div className="hero__content site-grid">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean <br /> restaurant, focused on traditional recipes <br />
            served with a modern twist.
          </p>
          <button type="button" onClick={handleReserveClick}>
            Reserve a Table
          </button>
        </div>
        <img src={restaurantfood} alt="Restaurant food" />
      </div>
    </section>
  );
}
