import ClientCard from "../cards/ClientCard";
import clients from "../../data/clients";

export default function Testimonials() {
  return (
    <div>
      <hr/>
        <h2>Testimonials</h2>
        {clients.map(client => (
                <ClientCard
                    key={client.id}
                    rating={client.rating}
                    name={client.name}
                    image={client.image}
                    review={client.review}
                />
            ))}
      <hr/>
    </div>)
}