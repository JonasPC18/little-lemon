import ClientCard from "../cards/ClientCard";
import clients from "../../data/clients";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__content site-grid">
        <h2>Testimonials</h2>
        <div className="testimonials__cards">
          {clients.map((client) => (
            <ClientCard
              key={client.id}
              rating={client.rating}
              name={client.name}
              image={client.image}
              review={client.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
