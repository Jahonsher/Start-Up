export async function fetchTours() {
  try {
    const response = await fetch('/data.json'); // Yoki API: 'https://api.example.com/tours'
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ma\'lumot olishda xato:', error);
    return [];
  }
}

export function filterTours(tours, filters) {
  return tours.filter(tour => {
    let matches = true;

    if (filters.destination && filters.destination !== 'Barchasi') {
      matches = matches && tour.destination === filters.destination;
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      matches = matches && tour.price >= min && tour.price <= max;
    }

    if (filters.duration) {
      matches = matches && tour.duration === filters.duration;
    }

    return matches;
  });
}