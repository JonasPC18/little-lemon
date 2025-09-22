import restaurant from '../../assets/images/restaurant.jpg';

export default function Footer() {
  return (
    <div>
      <hr/>

      <img src={restaurant} alt="Restaurant" width="300px"/> {/* Ajustar depois */}

      <div>
        <h5>Doormat Navigation</h5>
        <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#order-online">Order Online</a></li>
        </ul>
      </div>

      <div>
        <h5>Contact</h5>  
        <ul>
          <li>Adress</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>

      <div>
        <h5>Social Media Links</h5>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>YouTube</li>
        </ul> 
      </div>




    </div>)
}