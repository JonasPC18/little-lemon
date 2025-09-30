import DishCard from "../cards/DishCard";
import dishes from "../../data/dishes";

export default function Highlights() {
  return (
    <div className="highlights site-grid">
      <div className="highlights__header">
        <h2>This weeks specials!</h2>
        <button type="button">Online Menu</button>
      </div>
      <div className="highlights__cards">
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            title={dish.title}
            price={dish.price}
            image={dish.image}
            description={dish.description}
          />
        ))}
      </div>
    </div>
  );
}
