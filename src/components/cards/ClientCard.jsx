export default function ClientCard({ name, rating, image, review }) {
  return (
    <div>
      <p>{rating}</p>
      <img src={image} alt={`Cliente ${name}`} width={150} /> {/* Ajustar depois */}
      <h3>{name}</h3>
      <p>{review}</p>
    </div>
  );
}