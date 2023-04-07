async function home() {
  let data = await getMovies();
  attachRows(data);
}

function createRow(movie) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
    <th scope="row" class="ps-4">
      <div class="form-check font-size-16"></div>
    </th>
    <td class="id"><a href="#" class="text-body">${movie.id}</a></td>
    <td class="movie"><span class="badge badge-soft-success mb-0">${movie.movie}</span></td>
    <td class="genre">${movie.genre}</td>
    <td class="country">${movie.country}</td>
    <td class="year">${movie.year}</td>
  `;

  return tr;
}

function createHeaderRow() {
  let section = document.createElement("section");
  section.classList.add("movie-row");

  section.innerHTML = `
      <div class="table-responsive">
        <table class="table project-list-table table-nowrap align-middle table-borderless">
          <thead>
            <tr>
              <th scope="col" class="ps-4"></th>
              <th scope="col">ID</th>
              <th scope="col">Movie</th>
              <th scope="col">Genre</th>
              <th scope="col">Country</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    `;

  return section;
}

function attachRows(movies) {
  let container = document.querySelector(".container");
  container.innerHTML = "";

  // Create the header row and append it to the container
  let headerRow = createHeaderRow();
  container.appendChild(headerRow);

  // Create a movie row for each movie and append it to the table body
  let tableBody = headerRow.querySelector("tbody");
  movies.forEach((movie) => {
    tableBody.appendChild(createRow(movie));
  });
}

// function attachRows(movies) {
//   let container = document.querySelector(".container");
//   container.innerHTML = "";

//   //create the header row
//   let headerRow = document.createElement("div");
//   headerRow.classList.add("movie-row");
//   headerRow.innerHTML = `
//     <div class="table-responsive">
//       <table class="table project-list-table table-nowrap align-middle table-borderless">
//         <thead>
//           <tr>
//             <th scope="col" class="ps-4"></th>
//             <th scope="col">ID</th>
//             <th scope="col">Movie</th>
//             <th scope="col">Genre</th>
//             <th scope="col">Country</th>
//             <th scope="col">Year</th>
//           </tr>
//         </thead>
//         <tbody>
//         </tbody>
//       </table>
//     </div>
//   `;

//   container.appendChild(headerRow);

//   let tableBody = headerRow.querySelector("tbody");
//   movies.forEach((movie) => {
//     tableBody.appendChild(createRow(movie));
//   });
// }
