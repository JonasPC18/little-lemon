import restaurantChefB from '../../assets/images/restaurant-chef-B.jpg';
import marioAdrian from '../../assets/images/Mario-and-Adrian-b.jpg';

export default function About() {
  return (
    <div className="about site-grid">
      <div className="about__text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes
          served with a modern twist.
        </p>
      </div>
      <div className="about__gallery">
        <img className="about__image about__image--primary" src={restaurantChefB} alt="Restaurant Chef B" loading="lazy" />
        <img className="about__image about__image--secondary" src={marioAdrian} alt="Restaurant" loading="lazy" />
      </div>
    </div>
  );
}
