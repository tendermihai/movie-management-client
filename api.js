function api(path, method, body) {
  // const e declarata o data, pe cat let se redeclara la folosirea functiei
  const url = "http://localhost:3000" + path;

  const options = {
    method,

    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-Requested-With": "XMLHttpRequest",
    },
  };

  if (body !== null) {
    options.body = JSON.stringify(body);

    //stringify transforma din javascript in json
    //parse transforma din json in javascript
  }
  return fetch(url, options);
}

async function getMovies() {
  let data = await api("/api/v1/movies/all", "GET", null);
  return data.json();
}

async function getSortedBy(field) {
  console.log(field);
  let movies = await api("/api/v1/movies/sort/" + field, "GET", null);

  return movies.json();
}

async function postMovie(movie) {
  let movieResponse = await api("/api/v1/movie/add", "POST", movie);

  return movieResponse.json();
}
