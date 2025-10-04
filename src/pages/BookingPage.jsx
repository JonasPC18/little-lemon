import BookingForm from '../components/forms/BookingForm';

export default function BookingPage() {
  const handleReservationSubmit = (reservation) => {
    // Placeholder for future submit handling (API call, state update, etc.).
    console.log('Reservation submitted:', reservation);
  };

  return (
    <section className="booking-page">
      <div className="booking-page__content site-grid">
        <div className="booking-page__intro">
          <h1>Reserve a Table</h1>
          <p>Secure your spot at Little Lemon and enjoy a delightful Mediterranean-inspired experience.</p>
        </div>

        <div className="booking-page__form">
          <BookingForm onSubmit={handleReservationSubmit} />
        </div>
      </div>
    </section>
  );
}
