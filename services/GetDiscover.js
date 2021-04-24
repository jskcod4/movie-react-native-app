import { API_KEY, API_URL } from '../settings';

export const SortByOptions = {
  voteDesc: 'vote_average.desc',
};

export function GetResponseDiscover(response) {
  const { results } = response;

  return results;
}

const GetDiscover = (sortBy = null) => {
  const url = new URL(`${API_URL}/discover/movie`);

  const params = {
    api_key: API_KEY,
    sortBy,
  };

  url.search = new URLSearchParams(params).toString();

  return fetch(url)
    .then((res) => res.json())
    .then(GetResponseDiscover);
};

export default GetDiscover;
