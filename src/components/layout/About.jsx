import restaurantChefB from '../../assets/images/restaurant-chef-B.jpg';
import restaurant from '../../assets/images/restaurant.jpg';

export default function About() {
  return (
    <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <img src={restaurantChefB} alt="Restaurant Chef B" width="300px"/> {/* Ajustar depois */}
        <img src={restaurant} alt="Restaurant" width="300px"/> {/* Ajustar depois */}
    </div>)
}