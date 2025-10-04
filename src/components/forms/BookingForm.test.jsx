import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockTimes = ['17:00', '18:00'];

let BookingForm;

describe('BookingForm', () => {
  beforeEach(() => {
    jest.resetModules();
    global.fetchAPI = jest.fn(() => mockTimes);
    // eslint-disable-next-line global-require
    BookingForm = require('./BookingForm').default;
  });

  afterEach(() => {
    delete global.fetchAPI;
    BookingForm = undefined;
    jest.resetModules();
  });

  const selectOccasion = (value = 'Birthday') => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionSelect, { target: { value } });
    return occasionSelect;
  };

  test('renders the date label in the booking form', () => {
    render(<BookingForm />);
    const labelElement = screen.getByText('Choose date');
    expect(labelElement).toBeInTheDocument();
  });

  test('date input includes HTML5 validation attributes', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/choose date/i);
    const today = new Date().toISOString().split('T')[0];

    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute('min', today);
  });

  test('time select is required and populated from API results', () => {
    render(<BookingForm />);
    const timeSelect = screen.getByLabelText(/choose time/i);

    expect(global.fetchAPI).toHaveBeenCalledTimes(1);
    expect(timeSelect).toBeRequired();
    const options = within(timeSelect).getAllByRole('option');
    const optionValues = options.map((option) => option.value);
    expect(optionValues).toEqual(expect.arrayContaining(mockTimes));
  });

  test('guests input enforces numeric range via HTML attributes', () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toBeRequired();
  });

  test('occasion select exposes a disabled placeholder option', () => {
    render(<BookingForm />);
    const placeholderOption = screen.getByRole('option', { name: /select an occasion/i });

    expect(placeholderOption).toBeDisabled();
    expect(placeholderOption).toHaveValue('');
  });

  test('submit button remains disabled until form is valid', () => {
    render(<BookingForm />);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    expect(submitButton).toBeDisabled();

    selectOccasion('Birthday');

    expect(submitButton).not.toBeDisabled();
  });

  test('shows a validation error and disables submit when guest count is invalid', () => {
    render(<BookingForm />);
    selectOccasion('Birthday');

    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    fireEvent.change(guestsInput, { target: { value: '0' } });
    fireEvent.blur(guestsInput);

    expect(screen.getByText(/between 1 and 10 guests/i)).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test('allows submission when all validation passes', () => {
    const handleSubmit = jest.fn();
    const { container } = render(<BookingForm onSubmit={handleSubmit} />);

    selectOccasion('Birthday');
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '4' } });

    const timeSelect = screen.getByLabelText(/choose time/i);
    fireEvent.change(timeSelect, { target: { value: mockTimes[1] } });

    const form = container.querySelector('form');
    fireEvent.submit(form);

    expect(handleSubmit).toHaveBeenCalledWith({
      date: expect.any(String),
      time: mockTimes[1],
      guests: '4',
      occasion: 'Birthday',
    });
  });

  test('displays a validation error when date is cleared', () => {
    render(<BookingForm />);
    selectOccasion('Birthday');

    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: '' } });
    fireEvent.blur(dateInput);

    expect(screen.getByText(/please choose a date/i)).toBeInTheDocument();
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
  });
});
