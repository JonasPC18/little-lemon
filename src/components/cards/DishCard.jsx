export default function DishCard({ title, price, image, description }) {
  return (
    <div>
      <img src={image} alt={title} width="250px" /> {/* Ajustar depois */}
      <h3>{title}</h3>
      <p>{description}</p>
      <span>${price}</span>
    </div>
  );
}