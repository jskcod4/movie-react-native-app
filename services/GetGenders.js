import { API_KEY, API_URL } from 'settings';

export function GetResponseGender(response) {
  const { genres } = response;

  return genres;
}

export default function GetGenders() {
  return fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(GetResponseGender);
}
