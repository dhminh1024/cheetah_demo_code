let currentSidemenu = "top-stories";
const API_KEY = "1b50730b754f46618060e2353ce40222";
let newsList = [];

const getArticles = async () => {
  const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  renderArticles(newsList);
  console.log(data);
};

const renderArticles = (newsList) => {
  const newsListHTML = newsList
    .map((news) => {
      return `<li class="media">
      <div class="media-body">
        <h5 class="mt-0 mb-1">${news.title}</h5>
        <p>${news.content}</p>
      </div>
      <img src="${news.urlToImage}" class="ml-3" alt="..." />
    </li>`;
    })
    .join("");
  console.log(newsListHTML);
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

const handleClickSidemenu = (category) => {
  putActiveClass(category);
};

putActiveClass(currentSidemenu);
