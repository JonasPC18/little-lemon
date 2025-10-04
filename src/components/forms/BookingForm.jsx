import { useEffect, useReducer, useState } from 'react';
import { initializeTimes, updateTimes } from '../../utils/bookingTimes';

const occasionOptions = ['Birthday', 'Anniversary'];

const formatDateForInput = (date) => date.toISOString().split('T')[0];

export default function BookingForm({ onSubmit }) {
  const todayString = formatDateForInput(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
  const [date, setDate] = useState(todayString);
  const [time, setTime] = useState(() => (availableTimes[0] ? availableTimes[0] : ''));
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('');
  const [touched, setTouched] = useState({ date: false, time: false, guests: false, occasion: false });

  useEffect(() => {
    if (availableTimes.length > 0) {
      setTime((prev) => (availableTimes.includes(prev) ? prev : availableTimes[0]));
    } else {
      setTime('');
    }
  }, [availableTimes]);

  const isDateValid = Boolean(date);
  const isTimeValid = Boolean(time);
  const guestCount = Number(guests);
  const isGuestsValid = !Number.isNaN(guestCount) && guestCount >= 1 && guestCount <= 10;
  const isOccasionValid = Boolean(occasion);

  const isFormValid = isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
    if (newDate) {
      dispatch({ type: 'dateChanged', date: newDate });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({ date: true, time: true, guests: true, occasion: true });

    if (!isFormValid) {
      return;
    }

    if (onSubmit) {
      onSubmit({ date, time, guests, occasion });
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="booking-form__group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={date}
          min={todayString}
          onChange={handleDateChange}
          onBlur={() => setTouched((prev) => ({ ...prev, date: true }))}
          required
        />
        {touched.date && !isDateValid && <span className="booking-form__error">Please choose a date.</span>}
      </div>

      <div className="booking-form__group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, time: true }))}
          required
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        {touched.time && !isTimeValid && <span className="booking-form__error">Please select a time.</span>}
      </div>

      <div className="booking-form__group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          placeholder="1"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, guests: true }))}
          required
        />
        {touched.guests && !isGuestsValid && (
          <span className="booking-form__error">Please enter between 1 and 10 guests.</span>
        )}
      </div>

      <div className="booking-form__group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, occasion: true }))}
          required
        >
          <option value="" disabled>
            Select an occasion
          </option>
          {occasionOptions.map((occasionOption) => (
            <option key={occasionOption} value={occasionOption}>
              {occasionOption}
            </option>
          ))}
        </select>
        {touched.occasion && !isOccasionValid && <span className="booking-form__error">Please select an occasion.</span>}
      </div>

      <input className="booking-form__submit" type="submit" value="Make Your Reservation" disabled={!isFormValid} />
    </form>
  );
}
