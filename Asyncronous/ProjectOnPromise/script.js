const APIkey = "231cf509958443008bff398d363fd7b3";
const searchkeyword = "indonesia";
const pageSize = 10;
const URL = `https://newsapi.org/v2/everything?q=${searchkeyword}&pageSize=${pageSize}&apiKey=${APIkey}`;
let articlesData = [];
const container = document.getElementById("newsContainer");

const navbarSearchInput = document.getElementById("navbarSearchInput");
navbarSearchInput.addEventListener("input", handleSearch);

function fetchData() {
  fetch(URL)
    .then((response) => response.json())
    .then((jsonData) => {
      createCard2(jsonData.articles);
      articlesData = jsonData.articles;
    })
    .catch((err) => console.error(err));
}

function createCard2(data) {
  container.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    if (element.urlToImage == null) {
      element.urlToImage = "https://via.placeholder.com/150";
    }
    const cardHTML = `
      <div class="col-md-3 p-2 g-col-6">
        <div class="card" style="width: 18rem">
          <img src="${element.urlToImage}" class="card-img-top" alt="Placeholder" />
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.publishedAt}</p>
            <div class="card-text">${element.description}</div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += cardHTML;
  }
}
fetchData();

function handleSearch() {
  const keyword = navbarSearchInput.value.toLowerCase();

  const filteredData = articlesData.filter((article) => {
    return article.title.toLowerCase().includes(keyword);
  });

  container.innerHTML = "";
  console.log(keyword);

  createCard2(filteredData);
}
