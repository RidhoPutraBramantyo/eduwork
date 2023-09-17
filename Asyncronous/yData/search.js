/*const navbarSearchInput = document.getElementById("navbarSearchInput");

function handleSearchInput() {
  const searchValue = navbarSearchInput.value.toLowerCase();

  const filteredData = jsonData.articles.filter((article) => {
    return article.title.toLowerCase().includes(searchValue);
  });

  let container = document.getElementById("newsContainer");
  container.innerHTML = "";

  createCard2(filteredData);
}

navbarSearchInput.addEventListener("input", handleSearchInput);
*/

const APIkey = "231cf509958443008bff398d363fd7b3";
let searchkeyword = "indonesia";
let pageSize = 20;
const URL = `https://newsapi.org/v2/everything?q=${searchkeyword}&apiKey=${APIkey}`;

fetch(URL)
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => console.error(err));
