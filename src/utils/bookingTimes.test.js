import { initializeTimes, updateTimes, DEFAULT_TIMES } from './bookingTimes';

describe('bookingTimes helpers', () => {
  const mockTimes = ['17:30', '18:30'];

  beforeEach(() => {
    global.fetchAPI = jest.fn(() => mockTimes);
  });

  afterEach(() => {
    delete global.fetchAPI;
    jest.clearAllMocks();
  });

  test('initializeTimes returns available times from API for today', () => {
    const result = initializeTimes();

    expect(global.fetchAPI).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes requests new availability for the provided date', () => {
    const action = { type: 'dateChanged', date: '2025-01-01' };
    const state = DEFAULT_TIMES;

    const result = updateTimes(state, action);

    expect(global.fetchAPI).toHaveBeenCalledWith(new Date(action.date));
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes falls back to previous state when no date provided', () => {
    const state = ['17:00'];
    const result = updateTimes(state, { type: 'noop' });

    expect(result).toBe(state);
  });
});
