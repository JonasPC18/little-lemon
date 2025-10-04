/* global fetchAPI */
export const DEFAULT_TIMES = [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
];

function fetchTimes(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return [...DEFAULT_TIMES];
  }

  const api = typeof fetchAPI === 'function' ? fetchAPI : null;
  if (!api) {
    return [...DEFAULT_TIMES];
  }

  try {
    const times = api(date);
    return Array.isArray(times) && times.length ? times : [...DEFAULT_TIMES];
  } catch (error) {
    return [...DEFAULT_TIMES];
  }
}

export function initializeTimes() {
  const today = new Date();
  return fetchTimes(today);
}

export function updateTimes(state, action) {
  if (action && action.date) {
    const date = new Date(action.date);
    return fetchTimes(date);
  }

  return state;
}
