import restaurantfood from '../../assets/images/restauranfood.jpg';

export default function Hero() {
  return (
    <div className="hero site-grid">

        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean <br/> restaurant, focused on traditional recipes <br/>served with a modern twist.</p>
          <button>Reserve a Table</button>
        </div>
        <img src={restaurantfood} alt="Restaurant food"/>
    </div>)
}