import restaurantfood from '../../assets/images/restauranfood.jpg';

export default function Hero() {
  return (
    <div>
        <hr/>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <img src={restaurantfood} alt="Restaurant food" width="200px"/> {/* Ajustar depois */}
        <button>Reserve a Table</button>
        <hr/>
    </div>)
}