export default function DishCard({ title, price, image, description }) {
  const formattedPrice = typeof price === "number" ? price.toFixed(2) : price;
  const priceLabel = `$${formattedPrice}`;

  return (
    <article className="dish-card">
      <img className="dish-card__image" src={image} alt={title} />
      <div className="dish-card__body">
        <div className="dish-card__header">
          <h3>{title}</h3>
          <span className="dish-card__price">{priceLabel}</span>
        </div>
        <p className="dish-card__description">{description}</p>
        <a className="dish-card__cta" href="#order-online">Order a delivery</a>
      </div>
    </article>
  );
}
