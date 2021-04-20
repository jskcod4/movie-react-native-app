import { API_KEY, API_URL, TrendingTypes } from 'settings';

export function GetResponseTrending(response) {
  const { results } = response;

  return results;
}

export default function GetTrending({ type = TrendingTypes.Day }) {
  return fetch(`${API_URL}/trending/movie/${type}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(GetResponseTrending);
}
