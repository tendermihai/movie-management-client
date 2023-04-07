let selectBtn = document.querySelector(".sort");
if (selectBtn) {
  selectBtn.addEventListener("change", async () => {
    console.log(selectBtn.value);

    let data = await getSortedBy(selectBtn.value);
    attachRows(data);
  });

  home();
}

let submitBtn = document.querySelector(".submitMovie");

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    const movie = document.querySelector(".movie").value;
    const genre = document.querySelector(".genre").value;
    const country = document.querySelector(".country").value;
    const year = document.querySelector(".year").value;
    postMovie({ movie, genre, country, year });
  });
}
