let currentSidemenu = "top-stories";
const API_KEY = "1b50730b754f46618060e2353ce40222";
let newsList = [];

const getArticles = async () => {
  const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  renderArticles(newsList);
};

const renderArticles = (newsList) => {
  const newsListHTML = newsList
    .map((news) => {
      return `<li class="media">
      <div class="media-body">
        <h5 class="mt-0 mb-1">${news.title}</h5>
        <p>${news.content}</p>
        <div>
          <a href="${news.url}" target="_blank">View Full Coverage</a>
        </div>
      </div>
      <img src="${news.urlToImage}" class="ml-3" alt="..." />
    </li>`;
    })
    .join("");
  document.getElementById("news-list").innerHTML = newsListHTML;
};
getArticles();

const putActiveClass = (category) => {
  document.getElementById(currentSidemenu).classList.remove("active");
  document.getElementById(category).classList.add("active");
  document.getElementById("category-title").innerHTML = category
    .split("-")
    .join(" ")
    .toUpperCase();
  currentSidemenu = category;
};

const handleClickSidemenu = async (category) => {
  putActiveClass(category);

  // Load data from the category
  document.getElementById("news-list").innerHTML = "Loading...";
  const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  renderArticles(newsList);
};

const handleSearchClick = async () => {
  try {
    const q = document.getElementById("search-input").value;
    document.getElementById("news-list").innerHTML = "Loading...";
    let url;
    if (currentSidemenu !== "top-stories") {
      url = `http://newsapi.org/v2/top-headlines?country=us&category=${currentSidemenu}&q=${q}&apiKey=${API_KEY}`;
    } else {
      url = `http://newsapi.org/v2/top-headlines?country=us&q=${q}&apiKey=${API_KEY}`;
    }
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;
    console.log({ q, newsList });
    renderArticles(newsList);
  } catch (error) {
    console.log(error);
  }
};

putActiveClass(currentSidemenu);
