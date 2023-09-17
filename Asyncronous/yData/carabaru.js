const APIkey = "231cf509958443008bff398d363fd7b3";
let searchkeyword = "indonesia";
let pageSize = 20;
const URL = `https://newsapi.org/v2/everything?q=${searchkeyword}&apiKey=${APIkey}`;

//================================================
function fetchDataAndCreateCard() {
  fetch(URL)
    .then((response) => response.json())
      .then((jsonData) => {
        
          
    //   createCard2(jsonData.articles);
    // })
    .catch((err) => console.error(err));
}}

function search


function createCard2(data) {
  let container = document.getElementById("newsContainer");

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    if (element.urlToImage == null) {
      element.urlToImage = "https://via.placeholder.com/150";
    }
    let cardHTML = `
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

fetchDataAndCreateCard();
