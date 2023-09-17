const navbarSearchInput = document.getElementById("navbarSearchInput");

navbarSearchButton.addEventListener("input", function () {
  const searchValue = navbarSearchInput.value.toLowerCase();

  const filteredData = articlesData.filter((article) => {
    return article.title.toLowerCase().includes(searchValue);
  });

  container.innerHTML = "";
  console.log(searchValue);

  // createCard2(filteredData);
});
