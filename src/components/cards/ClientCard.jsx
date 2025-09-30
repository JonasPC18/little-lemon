export default function ClientCard({ name, rating, image, review }) {
  const numericRating = Number(rating);
  const normalizedRating = Number.isNaN(numericRating)
    ? 0
    : Math.max(0, Math.min(5, Math.round(numericRating)));
  const hasRating = normalizedRating > 0;
  const stars = hasRating ? '⭐'.repeat(normalizedRating) : '—';
  const ratingLabel = hasRating ? `Rating ${normalizedRating} out of 5` : 'No rating available';

  return (
    <article className="client-card">
      <p className="client-card__rating" aria-label={ratingLabel}>
        {stars}
      </p>
      <div className="client-card__profile">
        <img className="client-card__avatar" src={image} alt={`Cliente ${name}`} width={150} /> {/* Ajustar depois */}
        <h3>{name}</h3>
      </div>
      <p className="client-card__review">{review}</p>
    </article>
  );
}
