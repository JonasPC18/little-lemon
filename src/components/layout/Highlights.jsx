import DishCard from "../cards/DishCard"
import dishes from "../../data/dishes"

export default function Highlights() {
  return (
    <div>
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
        <div>
            {dishes.map(dish => (
                <DishCard
                    key={dish.id}
                    title={dish.title}
                    price={dish.price}
                    image={dish.image}
                    description={dish.description}
                />
            ))}
        </div>
    </div>)
}