const navbarSearchInput = document.getElementById("navbarSearchInput");

const navbarSearchButton = document.getElementById("navbarSearchButton");

navbarSearchButton.addEventListener("click", function () {
  const searchValue = navbarSearchInput.value.toLowerCase();

  const filteredData = jsonData.articles.filter((article) => {
    return article.title.toLowerCase().includes(searchValue);
  });

  let container = document.getElementById("newsContainer");
  container.innerHTML = "";

  createCard2(filteredData);
});
