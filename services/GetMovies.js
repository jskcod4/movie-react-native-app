import { API_KEY, API_URL } from 'settings';

export function GetResponseMovie(response) {
  const { results } = response;

  return results;
}

export default function GetMovies({ keyword = 'batman' }) {
  return fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`)
    .then((res) => res.json())
    .then(GetResponseMovie);
}
