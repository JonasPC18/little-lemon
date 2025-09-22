import restaurantChefB from '../../assets/images/restaurant-chef-B.jpg';
import marioAdrian from '../../assets/images/Mario-and-Adrian-b.jpg';

export default function About() {
  return (
    <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <img src={restaurantChefB} alt="Restaurant Chef B" width="300px"/> {/* Ajustar depois */}
        <img src={marioAdrian} alt="Restaurant" width="300px"/> {/* Ajustar depois */}
    </div>)
}